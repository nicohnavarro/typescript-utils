function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
  return items.map((item => item[key]));
}

const dogs = [
  {
    name: 'Tobi',
    age: 11
  },
  {
    name: 'Argon',
    age: 14
  }
]

console.log(pluck(dogs, 'name'));

interface BaseEvent {
  time: number,
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantiy: number, productId: string; },
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log([name, data]);
}

sendEvent("checkout", { time: 10, user: 'Sonny' });
sendEvent('addToCart', { time: 15, user: 'Acnto', quantiy: 1, productId: '123Eas' });