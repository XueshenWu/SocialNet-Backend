export default class CreateReviewPostDto {
    post_id: number;
    readonly total: number = parseInt(process.env['REVIEW_TOTAL'])??1;
    readonly consensus: number= parseInt(process.env['REVIEW_PASS_CONSENSUS'])??.6;
    pass: number;
    decline: number;
    


    constructor(post_id: number) {
        this.post_id = post_id;
        this.pass = 0;
        this.decline = 0;
    }

    json(): string {
        return JSON.stringify(this);
    }
}