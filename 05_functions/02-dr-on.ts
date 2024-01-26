export type Cipher = (str: string) => string;

const createAdvancedCipher = (onVowel: Cipher, onConsonant: Cipher, onPunctuation: Cipher) => {
  return (text: string): string => {};
};
