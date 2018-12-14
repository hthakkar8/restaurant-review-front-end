import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestaurantService } from '../restaurants/restaurant.service';
import { Restaurant } from '../restaurants/restaurant.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable()

export class DataService {
    constructor(private httpClient: HttpClient, private restaurantService: RestaurantService,
                 private authService: AuthService) {}

    getRestaurants() {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.get<Restaurant[]>('http://127.0.0.1:5000/getallrestaurants', {
            headers: headers
        })
        .subscribe(
            (restaurants: Restaurant[]) => {
                this.restaurantService.setRestaurants(restaurants);
            }
        );
    }
}
