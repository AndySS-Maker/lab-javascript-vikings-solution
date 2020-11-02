// Soldier
class Soldier {
  constructor(theFirstArg, theSecondArg) {
    this.health = theFirstArg;
    this.strength = theSecondArg;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(amountOfDamage) {
    this.health -= amountOfDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(theFirstArg, theSecondArg, theThirdArg) {
    super(theSecondArg, theThirdArg);
    this.name = theFirstArg;
  }

  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `${this.name} has received ${amount} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(amount) {
    super.receiveDamage(amount);
    if (this.health > 0) {
      return `A Saxon has received ${amount} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
    return;
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    return;
  }

  getRandomSoldier(army) {
    return Math.floor(Math.random() * army.length);
  }

  vikingAttack() {
    const randomVikingIndex = this.getRandomSoldier(this.vikingArmy);

    const randomSaxonIndex = this.getRandomSoldier(this.saxonArmy);

    const vikingSoldier = this.vikingArmy[randomVikingIndex];
    const saxonSoldier = this.saxonArmy[randomSaxonIndex];

    const damageReceived = saxonSoldier.receiveDamage(vikingSoldier.strength);

    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return damageReceived;
  }

  saxonAttack() {
    const randomVikingIndex = this.getRandomSoldier(this.vikingArmy);

    const randomSaxonIndex = this.getRandomSoldier(this.saxonArmy);

    const vikingSoldier = this.vikingArmy[randomVikingIndex];
    const saxonSoldier = this.saxonArmy[randomSaxonIndex];

    const damageReceived = vikingSoldier.receiveDamage(saxonSoldier.strength);

    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return damageReceived;
  }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
