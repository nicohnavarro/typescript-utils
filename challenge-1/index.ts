import houses from './houses';
import houseFromJson from './houses.json';
interface House {
  name: string;
  planets: string | string[]
}

interface HouseWithId  extends House{
  id: number;
}

// function findHouses(houses: string): HouseWithId[];
// function findHouses(houses:string, filter: (house:House)=> boolean): HouseWithId[];
// function findHouses(houses: House[]): HouseWithId[];
// function findHouses(houses:House[], filter: (house:House)=> boolean): HouseWithId[];

// function findHouses(houses: string | House[]): HouseWithId[];
// function findHouses(houses:string | House[], filter: (house:House)=> boolean): HouseWithId[];

function findHouses(
  input: string | House[],
  filter?: (house:House) => boolean
): HouseWithId[]{
  const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input;
  return (filter? houses.filter(filter): houses)
    .map((house)=> ({
      id:houses.indexOf(house),
      ...house
    }));
}
console.log('===========FROM TS FILE ===========')
console.log(findHouses(JSON.stringify(houses),({name})=> name === 'Atreides'))
console.log(findHouses(JSON.stringify(houses),({name})=> name === 'Harkonnen'))

//From json file
console.log('===========FROM JSON FILE ===========')
console.log(findHouses(JSON.stringify(houseFromJson),({name})=> name === 'Atreides'))
console.log(findHouses(JSON.stringify(houseFromJson),({name})=> name === 'Harkonnen'))
