"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puppy = void 0;
class Puppy {
    constructor(info) {
        this.colors = info.colors;
        this.furriness = info.furriness;
    }
    adopt(owner) {
        this.owner = owner;
    }
}
exports.Puppy = Puppy;
