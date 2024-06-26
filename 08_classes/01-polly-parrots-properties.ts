export class Parrot {
  private name: string;
  private phrases: string[];

  constructor(name: string) {
    this.name = name;
    this.phrases = [`${name} wants a cracker!`];
  }

  announce(): string {
    return `Squawk! I'm ${this.name}!`;
  }

  learn(phrase: string) {
    this.phrases.push(phrase);
  }

  speak() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
}
