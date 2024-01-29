export type Settings = {
  attempts: number;
  makeGuess: (text: string, attempt: number) => string;
  validateGuess: (guess: string) => boolean;
};

const createCodeCracker = () => {};
