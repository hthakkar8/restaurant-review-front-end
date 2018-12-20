import { Review } from './review.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class ReviewService {
    reviews: {[key: string]: Review[]};
    reviewStreams: {[key: string]: Subject<Review[]>};
    constructor() {
        this.reviews = {};
        this.reviewStreams = {};
    }

    getReviews(publicid: string) {
        if (this.reviewStreams.hasOwnProperty(publicid)) {
            return this.reviewStreams[publicid];
        } else {
            let reviewsSub = new Subject<Review[]>();
            this.reviewStreams[publicid] = reviewsSub;
            return reviewsSub;
        }
    }

    getReview(publicid: string, index: number) {
        return this.reviews[publicid][index];
    }

    setReviews(publicid: string, reviews: Review[]) {
        if (this.reviewStreams.hasOwnProperty(publicid)) {
            this.reviewStreams[publicid].next(reviews);
            this.reviews[publicid] = reviews;
        }
    }
}
