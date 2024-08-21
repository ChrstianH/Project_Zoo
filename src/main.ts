import Enclosure from "./classes/Enclosure";
import EnclosureId from "./classes/IDs";

document.getElementById("animal-form") as HTMLFormElement;
document.getElementById("animaType") as HTMLSelectElement;
document.getElementById("animal-name") as HTMLInputElement;
document.getElementById("animal-yearOfBirth") as HTMLInputElement;
document.getElementById("animal-specialNeeds") as HTMLInputElement;
document.getElementById("animal-create") as HTMLSelectElement;

let enclosures: Enclosure[] = [];

function createEnclosures(): Enclosure[] {
  const savannah = new Enclosure(EnclosureId.SavannahHabitat, "Savannah", 2000);
  const jungle = new Enclosure(EnclosureId.JungleHabitat, "Jungle", 2000);
  const aquarium = new Enclosure(EnclosureId.AquaticHabitat, "Aquarium", 2000);
  const reptileHouse = new Enclosure(
    EnclosureId.ReptileHouse,
    "Reptile House",
    2000
  );
  return [savannah, jungle, aquarium, reptileHouse];
}
enclosures = createEnclosures();
