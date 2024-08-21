import Animal from "./classes/Animal";
import animalTypes from "./classes/Animaltypes";
import Enclosure from "./classes/Enclosure";
import EnclosureId from "./classes/IDs";

let enclosures: Enclosure[] = [];
let animals: Animal[] = [];

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

const selectElement = document.getElementById(
  "animalType"
) as HTMLSelectElement;
function createAnimals(): void {
  Object.keys(animalTypes).forEach((animal: any, index: number) => {
    if (index < 14) {
      const optionElement = document.createElement(
        "option"
      ) as HTMLOptionElement;
      optionElement.value = animal;
      optionElement.textContent = animal;
      selectElement.appendChild(optionElement);
    }
  });
}

createAnimals();
