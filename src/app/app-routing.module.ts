import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { AuthGuard } from './auth/auth-guard.service';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { GeneralDetailsComponent } from './restaurants/restaurant-detail/general-details/general-details.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    // {path: 'restaurants', component: RestaurantListComponent, canActivate: [AuthGuard]},
    {path: 'restaurants', component: RestaurantListComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent, children:
    [
        {path: 'general-details', component: GeneralDetailsComponent},
        {path: 'reviews', component: ReviewsComponent},
    ]},
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
