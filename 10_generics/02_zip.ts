export const zip = <A, B>(a: A[], b: B[]): (A | B)[] => {
  const longerArray = a.length > b.length ? a : b;
};
