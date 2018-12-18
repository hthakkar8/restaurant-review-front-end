import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurant.service';
import { ReviewService } from '../../review.service';
import { Review } from '../../review.model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  restaurant: Restaurant;
  reviews: Review[];
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService,
    private reviewService: ReviewService, private dataService: DataService) { }
  ngOnInit() {
    const id = this.activatedRoute.parent.snapshot.params['id'];
    this.restaurant = this.restaurantService.getRestaurant(id);
    this.dataService.fetchReviews(this.restaurant.publicid);
    this.reviewService.getReviews(this.restaurant.publicid).subscribe(
      (reviews: Review[]) => {
        this.reviews = reviews;
      }
    );
  }

}
