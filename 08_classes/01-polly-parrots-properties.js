"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parrot = void 0;
class Parrot {
    constructor(name) {
        this.name = name;
        this.phrases = [`${name} wants a cracker!`];
    }
    announce() {
        return `Squawk! I'm ${this.name}!`;
    }
    learn(phrase) {
        this.phrases.push(phrase);
    }
    speak() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
}
exports.Parrot = Parrot;
