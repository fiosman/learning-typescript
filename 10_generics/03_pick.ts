export const pick = <T, K extends keyof T>(container: T, key: K) => {
  return container[key];
};
