function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient}`)
}

console.log('1C', 'Flour');
console.log('1C', 'Sugar', 'Something else')

interface User {
  id: string;
  info?: {
    email?: string;
  }
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return '';
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

function addWithCallback(x:number, y:number, callback?:()=> void){
  console.log([x,y]);
  callback?.();
}