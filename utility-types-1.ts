interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//   name?:string;
//   id?:string,
//   email?:string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

type RequiredMyUser = Required<MyUser>; //make all keys required
type JustEmailAndName = Pick<MyUser, 'email' | 'name'>; //just pick keys you want
type UserWithoutId = Omit<MyUser,'id'>;

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    }
  }, {});
}

const users: MyUser[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Mark' },
  { id: 3, name: 'Souy' }
]
console.log(mapById(users))

//But this doesn't look like waht i want 
// this is an example of Omit => Omit = !Pick
const mapByIdWithOmit = (users: MyUser[]): Record<MyUser['id'],UserWithoutId> => {
  return users.reduce((a, v) => {
    const {id,...other} = v;
    return {
      ...a,
      [id]: other,
    }
  }, {});
}
console.log(mapByIdWithOmit(users))