import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    const userType = this.authService.checkIfOwner();
     if (userType.owner) {
       this.dataService.getRestaurant(userType.restaurantID);
    } else {
      this.dataService.getRestaurants();
    }
  }
}
