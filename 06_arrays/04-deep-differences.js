"use strict";
const deepDifferences = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
            return undefined;
        }
    }
};
