const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello';

const stringArray1: Array<string> = ['a', 'b'];
const stringArray2: string[] = ['a', 'b'];

const numberArray1: Array<number> = [1, 2, 3];
const numberArray2: number[] = [1, 2, 3];

// Tuple
const contact: [string, number] = ['Vlad', 123456789];

// Any
let variable: any = 42;
variable = 'avc';
variable = () => {};

// function
function sayMyName1(name: string): void {
  console.log(name);
}
sayMyName1('Vlad');

const sayMyName2 = (name: string): void => console.log(name);
sayMyName2('Vlad');

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// Type
type Login = string;
const login: Login = 'admin';

type ID = number | string;
const id1: ID = 1234;
const id2: ID = 'asdas';

type SomeType = string | null | undefined;
