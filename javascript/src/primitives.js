/**
 * Undefined
 * Boolean
 * Number
 * String
 * BigInt
 * Symbol
 * Null
 * Object
 */

/** 
 * UNDEFINED - Default value on only defined variables
 */

let variable;
console.log(variable); // prints undefined

variable = null;
console.log(variable) // prints null

/** 
 * Number - 64 bits Binary with double precition (floating point).
 * 
 * Can be +Infinity, - Infinity y NaN (not a number)
 */

variable = 0;
console.log(typeof variable);

variable = 0.10;
console.log(typeof variable);


/**
 * String - 16 bits with positions
 */

variable = 'hello world';
console.log(variable, variable[2]);
console.log(variable.substring(2,5), variable.substring(0,5))

/** Symbol - create a new unique object */

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2 === sym3); //false
console.log(sym2, sym2.description);

/** OBJECTS
 * 
 * Like a collection of properties
 * properties with atributes: 
 * data (
 *  Value: any, 
 *  Writable: bool -> value can/not be change,
 *  enumerable: bool -> value can/not be iterate, 
 *  configurable: bool -> value can/not be deleted or changed by descriptor
 * ) 
 * accessor (get, set, enumerable, configurable)
 * 
 */

let obj = new Object({
    name: 'foo',
    value: 'bar'
})

console.log(obj);

