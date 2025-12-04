// Base Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // getter for species
  get species() {
    return this._species;
  }

  // optional setter (not required, but harmless)
  set species(newSpecies) {
    this._species = newSpecies;
  }

  // method: logs "The <species> makes a sound"
  makeSound() {
    console.log("The " + this.species + " makes a sound";
  }
}

// Cat class extends Animal
class Cat extends Animal {
  // logs "purr"
  purr() {
    console.log("purr");
  }
}

// Dog class extends Animal
class Dog extends Animal {
  // logs "woof"
  bark() {
    console.log("woof");
  }
}

// Expose classes on window so Cypress can access them
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
