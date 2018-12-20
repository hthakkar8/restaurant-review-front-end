import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/restaurants/review.model';


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
  constructor() { }

  ngOnInit() {
  }

}
