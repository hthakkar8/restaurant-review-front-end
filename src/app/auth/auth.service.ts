import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface LoginResponse {
    message: string;
    access_token: string;
    isadmin: boolean;
    isowner: boolean;
    restaurantpublicid: string;
}
@Injectable()
export class AuthService {
    token: string;
    isAdmin: boolean;
    isOwner: boolean;
    restaurantID: string;
    constructor(private router: Router, private httpClient: HttpClient) {}

    signUpUser(name: string, email: string, password: string, contact: string) {
        this.httpClient.post('http://127.0.0.1:5000/register', {'name': name, 'email': email, 'password': password, 
                                                                'contact': contact})
        .subscribe(
            (response: {message: string}) => {
                console.log(response);
                this.router.navigate(['/sign-in']);
            }
        );
    }

    signInUser(email: string, password: string) {
        this.httpClient.post('http://127.0.0.1:5000/login', {'email': email, 'password': password}).subscribe(
            (response: LoginResponse) => {
                this.token = response.access_token;
                this.isAdmin = response.isadmin;
                this.isOwner = response.isowner;
                this.restaurantID = response.restaurantpublicid;
                this.router.navigate(['/']);
            },
            (err) => {
                console.log(err);
                alert('Invalid Credentials');
            }
        );
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    checkIfAdmin() {
        return this.isAdmin ? true : false;
    }

    checkIfOwner() {
        return this.isOwner ? {restaurantID: this.restaurantID, owner: true}
                            : {restaurantID: null, owner: false};
    }

    logout() {
        this.token = null;
        this.router.navigate(['/sign-in']);
    }
}
