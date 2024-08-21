import Animal from "./classes/Animal";
import animalTypes from "./classes/Animaltypes";
import Bird from "./classes/Bird";
import continents from "./classes/Continents";
import emojis from "./classes/Emojis";
import Enclosure from "./classes/Enclosure";
import enclosureArray from "./classes/EnclosureArray";
import Fish from "./classes/Fish";
import EnclosureId from "./classes/IDs";
import Mammal from "./classes/Mammal";
import Reptile from "./classes/Reptile";

document.getElementById("animal-form") as HTMLFormElement;
document.getElementById("animaType") as HTMLSelectElement;
document.getElementById("animal-name") as HTMLInputElement;
document.getElementById("animal-yearOfBirth") as HTMLInputElement;
document.getElementById("animal-specialNeeds") as HTMLInputElement;
document.getElementById("animal-create") as HTMLSelectElement;

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
        emojis[index],
        animalName.value,
        Number(animalYearOfBirth.value),
        continents[Math.floor(Math.random() * 6)],
        animalSpecialNeeds.value,
        Object.values(EnclosureId)[Math.floor(Math.random() * 4)],
        ""
      );
      animals.push(mammal);
      showAllAnimals();
      break;

    case "Reptile":
      const reptile = new Reptile(
        emojis[index],
        animalName.value,
        Number(animalYearOfBirth.value),
        continents[Math.floor(Math.random() * 6)],
        animalSpecialNeeds.value,
        EnclosureId.ReptileHouse
      );
      animals.push(reptile);
      break;

    case "Bird":
      const bird = new Bird(
        emojis[index],
        animalName.value,
        Number(animalYearOfBirth.value),
        continents[Math.floor(Math.random() * 6)],
        animalSpecialNeeds.value,
        Object.values(EnclosureId)[Math.floor(Math.random() * 4)]
      );
      animals.push(bird);
      break;

    case "Fish":
      const fish = new Fish(
        emojis[index],
        animalName.value,
        Number(animalYearOfBirth.value),
        continents[Math.floor(Math.random() * 6)],
        animalSpecialNeeds.value,
        Object.values(EnclosureId)[Math.floor(Math.random() * 4)],
        ""
      );
      animals.push(fish);
      break;
  }

  function validateForm(): boolean {
    if (
      !animalName.value ||
      !animalYearOfBirth.value ||
      isNaN(Number(animalYearOfBirth.value))
    ) {
      alert(
        "Bitte füllen Sie alle Pflichtfelder aus und geben Sie ein gültiges Geburtsjahr an."
      );
      return false;
    }
    return true;
  }
});

function showAllAnimals() {
  const savannahElement = document.getElementById("savannah") as HTMLDivElement;
  savannahElement.innerHTML = "";
  const jungleElement = document.getElementById("jungle") as HTMLDivElement;
  jungleElement.innerHTML = "";
  const aquariumElement = document.getElementById("aquarium") as HTMLDivElement;
  aquariumElement.innerHTML = "";
  const reptileElement = document.getElementById(
    "reptileHouse"
  ) as HTMLDivElement;
  reptileElement.innerHTML = "";
  animals.forEach((animal: Animal) => {
    const animalEnclosure = animal._enclosureId;
    switch (animalEnclosure) {
      case EnclosureId.SavannahHabitat:
        savannahElement.innerHTML += animal._emoji;
        break;
      case EnclosureId.JungleHabitat:
        jungleElement.innerHTML += animal._emoji;
        break;
      case EnclosureId.ReptileHouse:
        reptileElement.innerHTML += animal._emoji;
        break;
      case EnclosureId.AquaticHabitat:
        aquariumElement.innerHTML += animal._emoji;
        break;
    }
  });
}
