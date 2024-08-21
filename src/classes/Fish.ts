import EnclosureId from "./IDs";
import Animal from "./Animal";

class Fish extends Animal {
  _typeoffish: string;

  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: string,
    specialNeeds: string,
    enclosureId: EnclosureId,
    typeoffish: string
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
    this._typeoffish = typeoffish;
  }
}

export default Fish;
