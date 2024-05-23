"use strict";
const describeLandmark = (landmark) => {
    let description = "";
    switch (landmark.type) {
        case "fort":
            description = "";
            break;
        case "waterfall":
            description = `It is ${landmark.height} feet high.`;
            break;
        case "river":
            description = `It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
            break;
        case "lake":
            description = `It covers ${landmark.miles} square miles of water.`;
            break;
        case "lighthouse":
            description = `It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
            break;
        case "park":
            description = `It covers ${landmark.acres} square acres.`;
            break;
        case "mountain":
            description = `Its peak is ${landmark.height} feet high.`;
            break;
    }
    return `${landmark.name} is a ${landmark.type} in Upstate New York. ${description}`;
};
