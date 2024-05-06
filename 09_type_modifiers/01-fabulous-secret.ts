interface Character {
  powers: string[];
  name: string;
  side: string;
}

export const announceCharacter = (char: string) => {
  const formattedString = JSON.parse(char) as Character;
};
