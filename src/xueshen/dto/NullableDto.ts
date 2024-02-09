class NullableDto{
    getNoneEmptyData(){
        for(let key in this) {
            if(this[key] === undefined) {
                delete this[key]
            }
        }
        return this
    }
}