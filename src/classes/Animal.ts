import EnclosureId from "./IDs";

class Animal {
  _emoji: string;
  _name: string;
  _yearOfBirth: number;
  _continents: string;
  _specialNeeds: string;
  _enclosureId: EnclosureId;

  constructor(
    emoji: string,
    name: string,
    yearOfBirth: number,
    continents: string,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    this._emoji = emoji;
    this._name = name;
    this._yearOfBirth = yearOfBirth;
    this._continents = continents;
    this._specialNeeds = specialNeeds;
    this._enclosureId = enclosureId;
  }
}

export default Animal;
