import type { PostReview } from "../types/post-review";

export default class CreateReviewPostDto {
    post_id: number;
    readonly total: number = parseInt(process.env['REVIEW_TOTAL'])??1;
    readonly consensus: number= parseInt(process.env['REVIEW_PASS_CONSENSUS'])??.6;
    reviews: PostReview[] = [];



    constructor(post_id: number) {
        this.post_id = post_id;
   
    }

    json(): string {
        return JSON.stringify(this);
    }
}