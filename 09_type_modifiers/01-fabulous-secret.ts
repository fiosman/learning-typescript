interface Character {
  powers: string[];
  name: string;
  side: string;
}

export const announceCharacter = (char: string) => {
  const formattedString = JSON.parse(char) as Character;

  console.log(`I am ${formattedString.name}`);
  console.log("My powers are: ", formattedString.powers.join(", "));
  console.log(`I am ${formattedString.side}`);

  return formattedString;
};
