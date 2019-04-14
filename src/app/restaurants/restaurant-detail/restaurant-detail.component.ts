import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { ReviewService } from '../review.service';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  navLinks = [{path: 'general-details', label: 'Details'}, {path: 'reviews', label: 'Reviews'}];
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService,
              private dataService: DataService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.restaurant = this.restaurantService.getRestaurant(id);
  }

  onDelete() {
    this.dataService.deleteRestaurant(this.restaurant.publicid);
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }
}
