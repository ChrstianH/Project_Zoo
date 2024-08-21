import Animal from "./classes/Animal";
import animalTypes from "./classes/Animaltypes";
import Bird from "./classes/Bird";
import Enclosure from "./classes/Enclosure";
import Fish from "./classes/Fish";
import EnclosureId from "./classes/IDs";
import Mammal from "./classes/Mammal";
import Reptile from "./classes/Reptile";

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

const animalForm = document.getElementById("animal-form") as HTMLFormElement;
animalForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const index = Object.keys(animalTypes).indexOf(selectElement.value);
  const animalName = document.getElementById("animal-name") as HTMLInputElement;
  const animalYearOfBirth = document.getElementById(
    "animal-yearOfBirth"
  ) as HTMLInputElement;
  const animalSpecialNeeds = document.getElementById(
    "animal-specialNeeds"
  ) as HTMLInputElement;
  switch (Object.values(animalTypes)[index]) {
    case "Mammal":
      const mammal = new Mammal(
        "Emoji",
        animalName.value,
        Number(animalYearOfBirth.value),
        "Continent",
        animalSpecialNeeds.value,
        EnclosureId.SavannahHabitat,
        ""
      );
      break;

    case "Reptile":
      const reptile = new Reptile(
        "Emoji",
        animalName.value,
        Number(animalYearOfBirth.value),
        "Continent",
        animalSpecialNeeds.value,
        EnclosureId.ReptileHouse
      );
      break;

    case "Bird":
      const bird = new Bird(
        "Emoji",
        animalName.value,
        Number(animalYearOfBirth.value),
        "Continent",
        animalSpecialNeeds.value,
        EnclosureId.JungleHabitat
      );
      break;

    case "Fish":
      const fish = new Fish(
        "Emoji",
        animalName.value,
        Number(animalYearOfBirth.value),
        "Continent",
        animalSpecialNeeds.value,
        EnclosureId.AquaticHabitat,
        ""
      );
      break;
  }
});
