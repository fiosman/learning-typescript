const shallowEquality = (a: string[], b: string[]): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};
