interface City {
  name: string;
  coordinates: {
    north: [number, number, number];
    west: [number, number, number];
  };
  catchphrase?: string;
}

const describeCity = (city: City): string => {
  return `${city.name}, New York\n
  ${city.catchphrase && `* "${city.catchphrase}"`}\n
  * ${city.coordinates.north} ${city.coordinates.west}
  `;
};
