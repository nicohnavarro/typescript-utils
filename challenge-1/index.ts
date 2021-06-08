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


// Fibonacci series
// 1 1 2 3 5 8 13 21 34 55 89 
function fibo(n:number):number{
  if(n <= 2) 
    return 1
  return fibo(n-1) + fibo(n-2)
}

function fibo2(n:number, memo:Record<string,number> = {}){
  if(n<= 2)
    return 1
  if(memo && n in memo)
    return memo[n];

  memo[n] = fibo2(n-1,memo) + fibo2(n-2,memo)
  return memo[n]
}
console.log('Recursion 1:',fibo(6));
console.log('Recursion 2:',fibo2(50));

