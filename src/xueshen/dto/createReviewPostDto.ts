import type { PostReview } from "../types/post-review";

export default class CreateReviewPostDto {
    post_id: number;
    repostparent_id?: number;
    
    constructor(post_id: number, repostparent_id?: number) {
        this.post_id = post_id;
        this.repostparent_id = repostparent_id;
    }

    json(): string {
        return JSON.stringify(this);
    }
}