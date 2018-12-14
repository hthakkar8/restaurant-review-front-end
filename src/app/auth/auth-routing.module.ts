import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    {path: 'sign-up', component: SignupComponent},
    {path: 'sign-in', component: SigninComponent}
];

@NgModule({
imports: [RouterModule.forChild(appRoutes)],
exports: [RouterModule]
})
export class AuthRoutingModule {

}
