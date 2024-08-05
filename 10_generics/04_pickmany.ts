const pickMany = <T extends object, K extends keyof T>(container: T, keys: K[]) => {
  const foundKeys: T[K][] = [];
  for (const key of keys) {
    if (key in container) {
      foundKeys.push(container[key]);
    }
  }

  return foundKeys;
};
