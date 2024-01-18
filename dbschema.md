## Database Schema Design
### Abstract
In this project, we choose to use both relational db(psql) and nosql(mongodb) to realize data persistance. \
To make full use the database with respect of their stength, psql is used to store basically only realations and must-exist fields:
- user ID
- post ID
- ...

mongo is used to store corresponding documents and most of UGCs for its high reading performance:
- userId -> userProfile
- postId -> postContent, postReplys
- userId -> userMessage
- ...

By doing this, we essentially integreted mongo into the relational db, and IDs are like foreign references of relations.\
For each DB transaction, there are 3 kinds of possible tracks:
1. pg->mongo
    - query relation in pg
    - query documents in mongo with relation(IDs)
2. mongo
    - query documents with filter(e.g. specific catogory)
3. pg
    - change relations in pg

### Evaluation
#### Advantage
Following the procedure stated above, we gain a huge advantage about handling data with no fixed schema. \
For example, a post may consist of optional/non-indexable data fields, like hashtags, contents and images(almost all except author and followers). If we are to store them in relation db, they are useless because they are not able to paticipate in relational ops like join.\
Also, for those optional fields which are likely to be null, it's a waste to manually model it in relation db because they are sparse.
#### Disadvantage
As most likely happening case that we query psql first and then mongo, the I/O time is roughly doubled(pg IO + mongo IO, comparing with only pg IO).\
Another big issue is about data consistancy. Theoretially, there is only one kind of data inconsistancy that would happen:
-  query mongo with outdated pg data

This is because, if one only need to query mongo' data, there must be no relation ops involved(bacause not able to), then relation changes of pg is irrelavent, and mongo's acid mechanism will come to protect concurrent reading; if one only need to query pg' data, then pg's acid will do the same work.\
Then leaves us with one possibilty, that is, query relation from pg, but before finishing query for right data from mongo, the relation is modified by other server.\
This is possible to avoid, if we start a transaction of pg, and do all the query on pg and mongo within the tranaction. As relation result is guarded by psql, we are confident that the result can't be outdated, just like mongo is automatially included in the session of transaction.

### Schema Design
#### Requirements
At the current cycle, we want our app be able to:
1. post content
2. forward post
3. like post
4. reply post
5. reply "reply"
6. user authentication
7. follow user
8. notification
9. user chat(maybe) 
10. channel(maybe)

#### Postgre
pg is used to store only mostly relations
1. user authentication(including role)
2. friends
3. user followers
4. channel members
5. userProfile


#### MongoDb

2. Posts(likes)
3. replies
4. notification
5. chat history





