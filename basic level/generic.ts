const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrgins: Array<string> = ['a', 'b'];

function reverse1<T>(array: Array<T>): Array<T> {
  return array.reverse();
}
reverse1(arrayOfNumbers);
reverse1(arrayOfStrgins);

const reverse2 = <T>(array: T[]): T[] => array.reverse();
reverse2(arrayOfNumbers);
reverse2(arrayOfStrgins);
