import { Restaurant } from './restaurant.model';

export class RestaurantService {

    restaurants: Restaurant[] = [
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
        new Restaurant('Hotel Zoe', 'Mathurdas Mills Compound, N.M Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013'
        , '9855500078', 4.2, '', 'https://imageshack.com/a/img673/9459/xTpXO8.jpg', '', 2300, ''),
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
}
