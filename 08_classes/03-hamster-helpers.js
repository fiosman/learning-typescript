"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hamster = exports.Gerbil = exports.SmallFurryPet = void 0;
class SmallFurryPet {
    constructor(species) {
        this.happiness = 0;
        this.species = species;
    }
    isHappy() {
        return this.happiness > 0;
    }
}
exports.SmallFurryPet = SmallFurryPet;
class Gerbil extends SmallFurryPet {
    constructor() {
        super("Gerbil");
    }
    dig() {
        this.happiness += 1;
    }
    eats(food) {
        return food === food;
    }
}
exports.Gerbil = Gerbil;
class Hamster extends SmallFurryPet {
    constructor() {
        super("Hamster");
    }
    run() {
        this.happiness += 1;
    }
    eats() {
        return true;
    }
}
exports.Hamster = Hamster;
