import { Restaurant } from './restaurant.model';

export class RestaurantService {

    restaurants: Restaurant[] = [
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', 
        // '', 2300, '6bbf87fd-37da-4785-8c2b-dc9726bcc916'),
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '',
        //  2300, '85b347c5-3ac7-4f8a-9584-9b1efa01392c'),
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        // new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        // , '9855500078', 4.2, 'zoe@hotel.com', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
    ];
    getRestaurants() {
        return this.restaurants.slice();
    }
    setRestaurants(restaurants: Restaurant[]) {
        this.restaurants = restaurants.slice();
    }
    getRestaurant(id: number) {
        return this.restaurants[id];
    }
    addRestaurant(restaurant: Restaurant) {
        this.restaurants.push(restaurant);
    }
    deleteRestaurant(publicid: string) {
       this.restaurants.splice(this.restaurants.findIndex(restaurant => restaurant.publicid === publicid), 1);
    }
}
