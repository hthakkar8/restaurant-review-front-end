import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../restaurant.model';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.css']
})
export class RestaurantListItemComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
    
  }

}
