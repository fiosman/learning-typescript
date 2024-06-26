export type SmallPetFood = "bugs" | "fruits" | "insects" | "plants" | "seeds" | "vegetables";

export abstract class SmallFurryPet {
  readonly species: string;
  protected happiness: number = 0;

  constructor(species: string) {
    this.species = species;
  }

  abstract eats(food: SmallPetFood): boolean;

  isHappy(): boolean {
    return this.happiness > 0;
  }
}

export class Gerbil extends SmallFurryPet {
  constructor() {
    super("Gerbil");
  }

  dig() {
    this.happiness += 1;
  }

  eats(food: string) {
    type oneOf = "insects" | "plants" | "seeds" | "vegetables";
    return (food as oneOf) === food;
  }
}

export class Hamster extends SmallFurryPet {
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
