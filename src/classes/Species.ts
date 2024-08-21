import Animal from "./Animal";
import EnclosureId from "./IDs";

class Species extends Animal {
  _reptile: string;
  _mammal: string;
  _bird: string;
  _fish: string;

  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: string,
    specialNeeds: string,
    enclosureId: EnclosureId,
    reptile: string,
    mammal: string,
    bird: string,
    fish: string
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
    this._reptile = reptile;
    this._mammal = mammal;
    this._bird = bird;
    this._fish = fish;
  }
}

export default Species;
