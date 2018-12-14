import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [FormsModule, AuthRoutingModule]
})
export class AuthModule { }
