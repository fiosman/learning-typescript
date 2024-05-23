"use strict";
const shallowEquality = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};
