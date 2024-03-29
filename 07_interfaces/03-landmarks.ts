interface Mountain {
  name: string;
  height: number;
  type: "mountain";
}

interface Park {
  name: string;
  acres: number;
  type: "park";
}

interface Lighthouse {
  name: string;
  lit: number;
  height: number;
  type: "lighthouse";
}

interface Lake {
  name: string;
  miles: number;
  type: "lake";
}

interface Fort {
  name: string;
  type: "fort";
}

interface Waterfall {
  name: string;
  height: number;
  type: "waterfall";
}

interface River {
  name: string;
  length: number;
  depth: number;
  type: "river";
}

type Landmark = Mountain | Park | Lighthouse | Lake | Waterfall | River | Fort;

const describeLandmark = (landmark: Landmark): string => {
  let description: string = "";

  switch (landmark?.type) {
    case "fort":
      description = "";
    case "waterfall":
    case "river":
    case "lake":
    case "lighthouse":
    case "park":
    case "mountain":
  }
  return `${landmark.name} is a ${landmark.type} in Upstate New York.`;
};
