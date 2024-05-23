"use strict";
const describeCity = (city) => {
    return `${city.name}, New York\n
  ${city.catchphrase && `* "${city.catchphrase}"`}\n
  * ${city.coordinates.north[0]}°${city.coordinates.north[1]}'${city.coordinates.north[2]}" ${city.coordinates.west[0]}°${city.coordinates.west[1]}'${city.coordinates.west[2]}"
  `;
};
