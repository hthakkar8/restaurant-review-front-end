import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/restaurants/review.model';
import { ReviewService } from 'src/app/restaurants/review.service';
import { Restaurant } from 'src/app/restaurants/restaurant.model';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent implements OnInit {
  review: Review;
  restaurant: Restaurant;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute
              , private reviewService: ReviewService, private restaurantService: RestaurantService
              , private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.parent.snapshot.params['id'];
    this.restaurant = this.restaurantService.getRestaurant(id);
    const index = this.activatedRoute.snapshot.queryParams['id'];
    this.review = this.reviewService.getReview(this.restaurant.publicid, index);
    console.log(this.review);
  }

  onAddResponse(form: NgForm) {
    const value = form.value;
    const responsedata = value.responsedata;
    this.dataService.postReviewResponse(responsedata, this.review.reviewid);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
