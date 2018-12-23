import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isIn = false;

  toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
    }
  constructor(private authService: AuthService, private restaurantService: RestaurantService) {
  }
  onLogout() {
    this.restaurantService.setRestaurants([]);
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
