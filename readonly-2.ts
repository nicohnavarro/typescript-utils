class Doggy {
  // public readonly name:string;
  // public age:string;
  constructor(public readonly name: string, public age: number) { //already declare
    // this.name = name;
    // this.age = age;
  }
}

class DogList {
  private doggies: Doggy[] = [];
  static instance: DogList = new DogList();
  private constructor() { };

  // public addDog(dog: Doggy) {
  //   this.doggies.push(dog);
  // }
  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs(){
    return this.doggies;
  }
}

// const listOfDogs = new DogList(); // :(
const listOfDogs = DogList.instance;
const muka = new Doggy('Muka', 8);
// DogList.instance.addDog(muka)
DogList.addDog(muka);
console.log(DogList.instance.getDogs());
