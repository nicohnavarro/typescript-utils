interface DatabaseGen<T, K> {
  get(id: K): T;
  set(id: K, value: T): void
}
// Easy peasy lemon squeezy

interface Persistable {
  saveToString(): string,
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabaseGen<T, K extends DBKeyType> implements DatabaseGen<T, K>{
  // private db: Record<string, string> = {};
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDBGen<T, K extends DBKeyType> extends InMemoryDatabaseGen<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }

}

// const myDB = new InMemoryDatabase();
const myDB2 = new PersistentMemoryDBGen<number, string>(); // key must be string number symbol
myDB2.set('foo', 22);
// myDB.db['foo'] = 'baz';
console.log(myDB2.get('foo'));
console.log(myDB2.saveToString());

const opt = myDB2.saveToString();
myDB2.set('bar', 26);

console.log(myDB2.saveToString());
myDB2.restoreFromString(opt);

console.log(myDB2.saveToString())