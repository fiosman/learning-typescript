"use strict";
const unique = (...args) => {
    return Array.from(new Set(args.reduce((acc, val) => acc.concat(val), [])));
};
unique(["b", "b", "c"], ["a", "c", "d"]);
