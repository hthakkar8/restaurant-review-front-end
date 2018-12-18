import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/restaurants/review.model';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/restaurants/restaurant.model';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute
              , private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.parent.snapshot.params['id'];
    this.restaurant = this.restaurantService.getRestaurant(id);
  }

  onAddReview(form: NgForm) {
    const value = form.value;
    const reviewdata = value.reviewdata;
    this.dataService.postReview(reviewdata, this.restaurant.publicid);
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
