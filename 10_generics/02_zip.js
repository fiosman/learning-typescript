"use strict";
const zip = (a, b) => {
    let smallerArray = [];
    let longerArray = [];
    const finalArray = [];
    if (a.length > b.length) {
        longerArray = a;
        smallerArray = b;
    }
    for (let i = 0; i < longerArray.length; i++) {
        finalArray.push(longerArray[i]);
        if (smallerArray[i]) {
            finalArray.push(smallerArray[i]);
        }
    }
    return finalArray;
};
