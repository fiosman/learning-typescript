"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.announceCharacter = void 0;
const announceCharacter = (char) => {
    const formattedString = JSON.parse(char);
    console.log(`I am ${formattedString.name}`);
    console.log("My powers are: ", formattedString.powers.join(", "));
    console.log(`I am ${formattedString.side}`);
    return formattedString;
};
exports.announceCharacter = announceCharacter;
