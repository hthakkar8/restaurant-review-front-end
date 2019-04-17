import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [FormsModule, AuthRoutingModule, CommonModule
    ]
})
export class AuthModule { }
