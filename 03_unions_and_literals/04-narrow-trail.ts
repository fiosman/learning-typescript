export function runCommands() {
  let availableReSource: "food" | "water" | undefined;
  let food: number = 5;
  let water: number = 5;

  for (let i = 1; i < 8; i++) {
    const roll = Math.floor(Math.random() * 7);

    if (roll >= 3 && roll <= 6) {
      if (roll % 2 === 0) {
        availableReSource = "food";
      } else {
        availableReSource = "water";
      }
    }
    food -= 1;
    water -= 1;
  }

  return true;
}
