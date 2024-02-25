interface Restaurant {
  city: string;
  name: string;
}

interface RestaurantMap {
  [city: string]: string[];
}

const groupRestaurants = (restaurants: Restaurant[]) => {
  let restaurantMap: RestaurantMap = {};
  for (let restaurant of restaurants) {
    if (restaurantMap[restaurant.city]) {
      restaurantMap[restaurant.city].push(restaurant.name);
    } else {
      restaurantMap[restaurant.city] = [restaurant.name];
    }
  }

  return restaurantMap;
};
