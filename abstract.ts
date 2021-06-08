abstract class StreetFighter {
  constructor() { }

  move() { }

  fight() {
    console.log(`${this.getName()} attack with ${this.getSpecialAttack()}`)
  }

  abstract getSpecialAttack(): string;
  abstract getName(): string;
}

class Ryu extends StreetFighter {
  constructor() {
    super();

  }

  getSpecialAttack(): string {
    return 'Hadoken';
  }
  getName(): string {
    return 'Ryu'
  }

}

const ryu = new Ryu();
ryu.fight()