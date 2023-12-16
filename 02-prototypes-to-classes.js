class Robot {
  constructor(name, abilities) {
    this.name = name;
    this.abilities = abilities;
    this.power = 100;
  }

  announce = () => {
    console.log("Greetings. I am " + this.name + ".");

    for (const ability of this.abilities) {
      console.log("I am able to " + this.abilities[i] + ".");
    }
  };

  charge = (amount) => {};
}

module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
