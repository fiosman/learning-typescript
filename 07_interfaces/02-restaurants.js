"use strict";
const groupRestaurants = (restaurants) => {
    let restaurantMap = {};
    for (let restaurant of restaurants) {
        if (restaurantMap[restaurant.city]) {
            restaurantMap[restaurant.city].push(restaurant.name);
        }
        else {
            restaurantMap[restaurant.city] = [restaurant.name];
        }
    }
    return restaurantMap;
};
