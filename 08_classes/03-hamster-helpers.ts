export type SmallPetFood = "bugs" | "fruits" | "insects" | "plants" | "seeds" | "vegetables";

export class SmallFurryPet {
  readonly species: string;
  protected happiness: number = 0;

  constructor(species: string, happiness: number) {
    this.species = species;
    this.happiness = happiness;
  }
}
