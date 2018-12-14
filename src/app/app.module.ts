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
import { DataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantListItemComponent
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
    MatBadgeModule
  ],
  providers: [RestaurantService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
