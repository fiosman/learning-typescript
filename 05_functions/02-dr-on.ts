export type Cipher = (str: string) => string;

const createAdvancedCipher = (onVowel: Cipher, onConsonant: Cipher, onPunctuation: Cipher) => {
  return (text: string): string => {
    const vowel = /[aeiou]/i;
    const consonant = /[bcdfghjklmnpqrstvwxyz]/i;
    let finalStr: string = "";
    for (const char of text) {
      if (vowel.test(char)) {
        finalStr += onVowel(char);
      } else if (consonant.test(char)) {
        finalStr += onConsonant(char);
      } else {
        finalStr += onPunctuation(char);
      }
    }

    return finalStr;
  };
};
