import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestaurantService } from '../restaurants/restaurant.service';
import { Restaurant } from '../restaurants/restaurant.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ReviewService } from '../restaurants/review.service';
import { Review } from '../restaurants/review.model';
import { User } from './user.model';
import { Template } from '../admin/view-templates/template.model';
import { TemplateService } from '../admin/view-templates/template-service.service';


@Injectable()

export class DataService {
  
    constructor(private httpClient: HttpClient, private restaurantService: RestaurantService,
                 private authService: AuthService, private reviewService: ReviewService,
                 private templateService: TemplateService) {}

    addTemplate(templatetext: string, food: number, service: number, ambience: number,
                overall: number, contains: number) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.post('http://127.0.0.1:5000/addtemplate', {
            'templatetext': templatetext,
            'food': food,
            'service': service,
            'ambience': ambience,
            'overall': overall,
            'contains': contains
        }, {
            headers: headers
        })
        .subscribe(
            data => {
                console.log(data);
            }
        );
    }
    deleteTemplate(id: number) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.post('http://127.0.0.1:5000/deletetemplate', {
            'templateid': id
        }, {
            headers: headers
        })
        .subscribe(
            data => {
                console.log(data);
            }
        );
      }
    deleteReview(reviewid: string) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.post('http://127.0.0.1:5000/deletereview', {
            'reviewid': reviewid
        }, {
            headers: headers
        })
        .subscribe(
            data => {
                console.log(data);
            }
        );
    }

    deleteRestaurant(publicid: string) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.post('http://127.0.0.1:5000/deleterestaurant', {
            'restaurantpublicid': publicid
        }, {
            headers: headers
        })
        .subscribe(
            data => {
                console.log(data);
                this.restaurantService.deleteRestaurant(publicid);
            }
        );
      }
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

    getTemplates() {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.get<Template[]>('http://127.0.0.1:5000/getalltemplates', {
            headers: headers
        })
        .subscribe(
            (templates: Template[]) => {
                this.templateService.setTemplates(templates);
            }
        );
    }

    fetchReviews(publicid: string) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.get<Review[]>('http://127.0.0.1:5000/getreviews/' + publicid, {
            headers: headers
        })
        .subscribe(
            (reviews: Review[]) => {
                this.reviewService.setReviews(publicid, reviews);
            }
        );
    }
    postReview(reviewdata: string, publicid: string) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.post('http://127.0.0.1:5000/postreview', {
            'reviewtext': reviewdata,
            'restaurantid': publicid
        }, {
            headers: headers
        })
        .subscribe(
            data => {
                console.log(data);
            }
        );
    }
    getRestaurant(restaurantID: string) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.get<Restaurant>('http://127.0.0.1:5000/getrestaurant/' + restaurantID, {
            headers: headers
        })
        .subscribe(
            (restaurant: Restaurant) => {
                this.restaurantService.addRestaurant(restaurant);
            }
        );
    }

    postReviewResponse(responsedata: any, reviewid: string) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.post('http://127.0.0.1:5000/postresponse', {
            'responsetext': responsedata,
            'reviewid': reviewid
        }, {
            headers: headers
        })
        .subscribe(
            data => {
                console.log(data);
            }
        );
      }

      fetchUsers() {
        const token = this.authService.getToken();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + token);
        return this.httpClient.get<User[]>('http://127.0.0.1:5000/getallusers', {
            headers: headers
        });
      }

      addRestaurant(name: string, email: string, address: string, contact: string,
                    owner: string, cost: number, menu: string, image: string, rating: number) {
            const token = this.authService.getToken();
            let headers = new HttpHeaders();
            headers = headers.set('Authorization', 'Bearer ' + token);
            return this.httpClient.post('http://127.0.0.1:5000/addrestaurant', {
                'name': name,
                'email': email,
                'address': address,
                'contact': contact,
                'owner': owner,
                'cost': cost,
                'menu': menu,
                'image': image,
                'rating': rating
            }, {
                headers: headers
            })
            .subscribe(
                data => {
                    console.log(data);
                }
            );
      }
}
