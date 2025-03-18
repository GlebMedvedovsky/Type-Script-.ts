let age: number = 30;
// age = "50"; // Error: Type 'number' is not assignable to type'string'.
let age1: number | string = 30;
age1 = "50";

// let x = 50;
// x = '50'; // Error: Type 'string' is not assignable to type 'number'.

let flag: boolean = false;
flag = true;

// number, string, boolean, null, undefined, void, any, never, Array, Tuple, Enum, Union, and Intersection, symbol(str), and object.

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array of numbers
arr.push(5); // ("a" in arr); // Error: Argument of type '"a"' is not assignable to parameter of type 'number'.

