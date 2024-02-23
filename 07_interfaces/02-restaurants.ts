interface Restaurant {
  city: string;
  name: string;
}

interface RestaurantMap {
  [city: string]: string[];
}

const groupRestaurants = (restaurants: Restaurant[]): RestaurantMap => {};
