interface Restaurant {
  city: string;
  name: string;
}

interface LandmarksByName {
  [city: string]: string[];
}

const groupRestaurants = (restaurants: Restaurant[]): LandmarksByName => {};
