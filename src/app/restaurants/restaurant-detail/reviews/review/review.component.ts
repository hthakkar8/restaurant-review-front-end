import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/restaurants/review.model';
import { DataService } from 'src/app/shared/data.service';
import { ReviewService } from 'src/app/restaurants/review.service';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() review: Review;
  @Input() isOwner: boolean;
  @Input() isAdmin: boolean;
  @Input() index: number;
  @Input() deleteReview: Subject<number>;
  constructor(private dataService: DataService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onDelete() {
    this.dataService.deleteReview(this.review.reviewid);
    this.deleteReview.next(+this.review.reviewid);
  }

}
