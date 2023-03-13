/* Composing types */
type mybool = true | false;

/* Generics -> provide variables to types */
type StringArray = Array<string>;

// you can declare own types that use generics 
interface Backpack<Type> { // T also valid
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<string>; //get will return an string type | add only add string values;


/* From OOP to Ts */

/* 
    All types are Sets of values
    Type system is Structural, not nominal -> 
        Nominal: each type is unique and even if types have the same data, you cannot assing across types
        Structural: focus on the shape, what's inside. -> duck sistem, shape like duck, it's a duck, if a goose has all the same attributes as a duck, then is also a duck
*/

interface A {
    x: number;
    y: number;
}
interface B {
    name: string;
}

function logNumbers(n: A)
{
    console.log('x=', n.x, 'y=', n.y);
}

function logString(s:B)
{
    console.log('Hello,',s.name);
}

const obj = {
    x:0,
    y:0,
    name: 'juan'
}
logNumbers(obj);
logString(obj); //it has name

// another example with classes

class Car 
{
    drive(){}
}

class Motorcycle
{
    drive(){} 
}

let w: Car = new Motorcycle();


/** TYPES */

/**
 * Primitives
 *  string
 *  number
 *  boolean
 * 
 * Arrays
 *  string[] - Array<string>
 * 
 * any => whenever you want.
 * 
 * Functions
 * 
 */

// Parameter Type Annotation
   function greet(name:string) { /* ...some great code */ }
  
// Return Type Annotation
   function getOne(): number { return 1 }
  
// Contextual typing
    const names = ['h', 'l'];

    names.forEach(function (s) { // we don't need to explicity type, contextual applies on functions 
        console.log(s.toUpperCase());
    });

    names.forEach((s) => console.log(s.toUpperCase())) // also applies on arrow functions

/**
 * Object types
 */

    function printCoord(pt: {x: number, y: number; z?}) // we can separate this with ; and also don't apply types (any assumed). `?` indicates an optional parameter
    {
        pt.z ? console.log('x is',pt.x,'y is', pt.y, 'z is', pt.z) : console.log('x is',pt.x,'y is', pt.y ); 
    }
    
    printCoord({ x: 3, y: 7 });

/** UNION types 
 * 
 * we can use new types with union of existing ones
 * we can operate ONLY if this operation is valid for every member of the union
*/

// function printId(id: string | number) 
// {
//     console.log(id.toUpperCase()) // not exists on type 'string | number'
// }

//narrow the union is the solution  

function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }