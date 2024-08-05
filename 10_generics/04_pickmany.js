"use strict";
const pickMany = (container, keys) => {
    const foundKeys = [];
    for (const key of keys) {
        if (container[key]) {
            foundKeys.push(container[key]);
        }
    }
    return foundKeys;
};
console.log(pickMany({ a: 1, b: 2, c: 3 }, ["a", "c"]));
