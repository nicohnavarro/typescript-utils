interface Database {
  get(id: string): string;
  set(id: string, value: string): void
}
// Easy peasy lemon squeezy

interface Persistable {
  saveToString(): string,
  restoreFromString(storedState:string):void;
}

class InMemoryDatabase implements Database {
  // private db: Record<string, string> = {};
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }

}

// const myDB = new InMemoryDatabase();
const myDB = new PersistentMemoryDB();
myDB.set('foo', 'bar');
// myDB.db['foo'] = 'baz';
console.log(myDB.get('foo'));
console.log(myDB.saveToString())