"use strict";
const zip = (a, b) => {
    let smallerArray = [];
    let longerArray = [];
    if (a.length > b.length) {
        longerArray = a;
        smallerArray = b;
    }
    const finalArray = [];
    for (let i = 0; i < longerArray.length; i++) {
        finalArray.push(longerArray[i]);
        if (smallerArray[i]) {
            finalArray.push(smallerArray[i]);
        }
    }
    return finalArray;
};
console.log(zip(["a", "b", "c", "d"], [1, 2]));
