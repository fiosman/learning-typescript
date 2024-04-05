export class Parrot {
  private name: string;
  private phrases: string[];

  constructor(name: string) {
    this.name = name;
    this.phrases = [`${name} wants a cracker!`];
  }
}
