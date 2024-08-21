import EnclosureId from "./IDs";
import Animal from "./Animal";

class Reptile extends Animal {
  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: string,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(emoji, name, yearOfBirth, continents, specialNeeds, enclosureId);
  }
}

export default Reptile;
