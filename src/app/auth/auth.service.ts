import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {
    token: string;

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
            (response: {message: string, 'access_token': string}) => {
                console.log(response);
                this.token = response.access_token;
                this.router.navigate(['/']);
            }
        );
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        this.token = null;
        this.router.navigate(['/sign-in']);
    }
}
