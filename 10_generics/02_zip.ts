const zip = <A, B>(a: A[], b: B[]): (A | B)[] => {
  let smallerArray: any[] = [];
  let longerArray: any[] = [];
  const finalArray: any[] = [];

  if (a.length > b.length) {
    longerArray = a;
    smallerArray = b;
  }

  for (let i = 0; i < longerArray.length; i++) {
    finalArray.push(longerArray[i]);

    if (smallerArray[i]) {
      finalArray.push(smallerArray[i]);
    }
  }

  return finalArray;
};
