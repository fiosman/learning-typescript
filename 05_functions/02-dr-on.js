"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAdvancedCipher = (onVowel, onConsonant, onPunctuation) => {
    return (text) => {
        const vowel = /[aeiou]/i;
        const consonant = /[bcdfghjklmnpqrstvwxyz]/i;
        let finalStr = "";
        for (const char of text) {
            if (vowel.test(char)) {
                finalStr += onVowel(char);
            }
            else if (consonant.test(char)) {
                finalStr += onConsonant(char);
            }
            else {
                finalStr += onPunctuation(char);
            }
        }
        return finalStr;
    };
};
