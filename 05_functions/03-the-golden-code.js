"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createCodeCracker = ({ attempts, makeGuess, validateGuess }) => {
    return (text) => {
        for (let i = 0; i < attempts; i++) {
            const guess = makeGuess(text, i);
            if (validateGuess(guess)) {
                return guess;
            }
        }
        return undefined;
    };
};
