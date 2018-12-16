import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurant.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent implements OnInit {

  restaurant: Restaurant;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  menuImages: NgxGalleryImage[];

  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService) { }
  ngOnInit() {
    const id = this.activatedRoute.parent.snapshot.params['id'];
    this.restaurant = this.restaurantService.getRestaurant(id);
    this.galleryOptions = [
      { 'image': false, 'height': '100px' },
      { 'breakpoint': 500, 'width': '100%' }
    ];
    this.galleryImages = [
      {
          small: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
          medium: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
          big: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg'
      },
      {
        small: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
        medium: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
        big: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg'
    },
    {
      small: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
      medium: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
      big: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg'
  }
  ];
  this.menuImages = [
    {
        small: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
        medium: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
        big: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg'
    },
    {
      small: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
      medium: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
      big: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg'
  },
  {
    small: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
    medium: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg',
    big: 'https://imageshack.com/a/img673/9459/xTpXO8.jpg'
}
];

  }

}
