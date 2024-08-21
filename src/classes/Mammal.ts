import EnclosureId from "./IDs";
import Animal from "./Animal";

class Mammal extends Animal {
  _typeofmammal: string;

  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: string,
    specialNeeds: string,
    enclosureId: EnclosureId,
    typeofmammal: string
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
    this._typeofmammal = typeofmammal;
  }
}

export default Mammal;
