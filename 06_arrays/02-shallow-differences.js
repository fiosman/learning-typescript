"use strict";
const shallowDifferences = (a, b) => {
    if (a.length !== b.length) {
        return undefined;
    }
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            newArray.push(undefined);
        }
        else {
            newArray.push(a[i]);
        }
    }
    return newArray;
};
