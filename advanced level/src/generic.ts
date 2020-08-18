const cars1: string[] = ['Ford', 'Audi'];
const cars2: Array<string> = ['Ford', 'Audi'];

const promise: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

promise.then((data) => console.log(data));

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b);
}

const merged1 = mergeObjects({ name: 'Vlad' }, { age: 20 });
const merged2 = mergeObjects({ model: 'BMW' }, { year: 2020 });
console.log(merged1);
console.log(merged2);

///////////

interface ILength {
  length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`
  };
}

console.log(withCount('Hello'));
console.log(withCount(['a', 1, 'x']));
console.log(withCount({ length: 20 }));

/////////////

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}
const person = {
  name: 'Vlad',
  age: 20
};

console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));

///////////

class Collection<T extends string | number | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item);
  }

  get items() {
    return this._items;
  }
}

const strings = new Collection<string>(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3]);
numbers.add(4);
numbers.remove(3);
console.log(numbers.items);

//////////
interface Car {
  model: string;
  year: number;
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }

  return car as Car;
}

///////

const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift();
cars[1];

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
};

// ford.model = 'Ferari';
