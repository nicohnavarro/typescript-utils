// type MyFlexibleDogInto = {
//   name:string;
// } & Record<string,string>;
type MyFlexibleDogInto = {
  name: string;
  [key: string]: string | number;
}

const dog: MyFlexibleDogInto = {
  name: 'LG',
  breed: 'Muut',
  age: 2
}

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
}

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void
}


function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "N"
}

const lg: DogInfo = {
  name: 'Lio',
  age: 13
}

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => { },
  onAgeChange: (v: number) => { },

})