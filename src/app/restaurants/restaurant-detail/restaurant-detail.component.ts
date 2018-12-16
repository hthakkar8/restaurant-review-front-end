import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  navLinks = [{path: 'general-details', label: 'Details'}, {path: 'reviews', label: 'Reviews'}];
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.restaurant = this.restaurantService.getRestaurant(id);

  }

}
