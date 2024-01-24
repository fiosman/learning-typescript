export type Cipher = (str: string) => string;

const createCipher = (cipher: Cipher) => {
  return (text: string): string => {
    let result: string = "";
    for (const char of text) {
      result += cipher(char);
    }
    return result;
  };
};
