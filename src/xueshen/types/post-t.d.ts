
import {Profile} from "@prisma/pg"
import {Post} from "@prisma/mongo"


export type Post_Author = Post &{
    author:Profile
}