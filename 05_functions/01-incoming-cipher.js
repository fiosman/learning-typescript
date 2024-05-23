"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createCipher = (cipher) => {
    return (text) => {
        let result = "";
        for (const char of text) {
            result += cipher(char);
        }
        return result;
    };
};
