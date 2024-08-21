import EnclosureId from "./IDs";
import Animal from "./Animal";

class Bird extends Animal {
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

export default Bird;
