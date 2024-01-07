export function runCommands() {
  let availableReSource: "food" | "water" | undefined;
  let food: number = 5;
  let water: number = 5;

  for (let day = 1; day < 8; day++) {
    const roll = Math.floor(Math.random() * 7);
    if (roll >= 3 && roll <= 6) {
      if (!availableReSource) {
        roll % 2 === 0 ? (availableReSource = "food") : (availableReSource = "water");
      } else {
        availableReSource === "food" ? (food += roll) : (water += roll);
        availableReSource = undefined;
      }
    }
    if (food === 0 || water === 0) {
      return false;
    } else {
      food -= 1;
      water -= 1;
    }
  }
  return true;
}
