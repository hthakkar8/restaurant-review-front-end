import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantListItemComponent } from './restaurants/restaurant-list/restaurant-list-item/restaurant-list-item.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { RestaurantService } from './restaurants/restaurant.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import { DataService } from './shared/data.service';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { GeneralDetailsComponent } from './restaurants/restaurant-detail/general-details/general-details.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxGalleryModule } from 'ngx-gallery';
import { ReviewService } from './restaurants/review.service';
import { ReviewComponent } from './restaurants/restaurant-detail/reviews/review/review.component';
import { AddReviewComponent } from './restaurants/restaurant-detail/reviews/add-review/add-review.component';
import { FormsModule } from '@angular/forms';
import { AddResponseComponent } from './restaurants/restaurant-detail/reviews/add-response/add-response.component';
import { AddRestaurantComponent } from './admin/add-restaurant/add-restaurant.component';
import { AddTemplatesComponent } from './admin/add-templates/add-templates.component';
import { ViewTemplatesComponent } from './admin/view-templates/view-templates.component';
import { TemplateItemComponent } from './admin/view-templates/template-item/template-item.component';
import { TemplateService } from './admin/view-templates/template-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantListItemComponent,
    RestaurantDetailComponent,
    GeneralDetailsComponent,
    ReviewsComponent,
    ReviewComponent,
    AddReviewComponent,
    AddResponseComponent,
    AddRestaurantComponent,
    AddTemplatesComponent,
    ViewTemplatesComponent,
    TemplateItemComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
    MatTabsModule,
    MatExpansionModule,
    NgxGalleryModule,
    FormsModule
  ],
  providers: [RestaurantService, DataService, ReviewService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
