const shallowDifferences = (a: string[], b: string[]) => {
  if (a.length !== b.length) {
    return undefined;
  }

  const newArray: (string | undefined)[] = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      newArray.push(undefined);
    } else {
      newArray.push(a[i]);
    }
  }

  return newArray;
};
