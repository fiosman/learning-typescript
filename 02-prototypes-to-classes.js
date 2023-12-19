class Robot {
  constructor(name, abilities) {
    this.name = name;
    this.abilities = abilities;
    this.power = 100;
  }

  announce = () => {
    console.log("Greetings. I am " + this.name + ".");

    for (const ability of this.abilities) {
      console.log("I am able to " + ability + ".");
    }
  };

  move = (amount) => {};

  charge = (amount) => {
    if (this.power < 100) {
    }
  };
}

class Humanoid {}

module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
