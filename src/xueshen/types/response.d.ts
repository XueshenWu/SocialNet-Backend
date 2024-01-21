type ResponseStatus = "SUCCESS" | "ERROR" | "FAIL"


type UniResponse<T> = {
    status: ResponseStatus;
    data: T;
}

export type{
    UniResponse,
    ResponseStatus
}