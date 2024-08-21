import EnclosureId from "./IDs";

class Enclosure {
  id: EnclosureId;
  name: string;
  builtInYear: number;

  constructor(id: EnclosureId, name: string, builtInYear: number) {
    this.id = id;
    this.name = name;
    this.builtInYear = builtInYear;
  }
}

export default Enclosure;
