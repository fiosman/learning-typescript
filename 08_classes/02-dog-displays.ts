export interface PuppyInTheWindow {
  colors: string[];
  furriness: number;
  owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
  colors: string[];
  furriness: number;
  owner: string | undefined;

  constructor(info: PuppyInTheWindow) {
    this.colors = info.colors;
    this.furriness = info.furriness;
  }
}
