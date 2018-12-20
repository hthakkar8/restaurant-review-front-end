import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant.model';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }

}
