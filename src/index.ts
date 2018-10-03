import Rectangle from "./Point";
import {Point} from "./Point";
import Person = Persons.Person;

let rect1 = new Rectangle(Point.point(1,1), Point.point(3,3));

console.log(rect1);

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuples
let x: [string, number];
x = ["hello", 10];

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

let foo:any = 5;
try{
    foo.compileTimeExisitingMethod();
}catch (e) {
    console.log("Method does not exists");
}

// union type
function foobar(a:string|undefined) {
    console.log(a);
}

// type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let anArray = [1,2];
let [firstValue,secondValue] = anArray;
let [ab, ...rest] = anArray;
console.log(firstValue);
console.log(secondValue);
console.log(ab);
console.log(rest);

let points = [Point.point(5, 1), Point.point(4, 3), Point.point(1, 6)];

let oddXCoordinates = points
    .map((point) => {
        return point.x;
    })
    .filter((x) => !(x % 2 == 0));

function printFirstPoint([firstPoint,..._]:Point[]){
    console.log(firstPoint);
}

printFirstPoint(points);

// object destruction
type C = {x: number}
let {x:renamedX}: C = points[0];
console.log(renamedX);

// Spreading
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);

let readonlyArray: ReadonlyArray<number> = [1, 2, 3];

let writeableArray1 = readonlyArray as number[];
let writeableArray2 = (<number[]>readonlyArray);

function createPerson(person:Person){
   console.log(person);
}

createPerson({firstName:"Fachher", lastName: "Syed", additionalInfo: 123});

interface FunctionInterface{
    (a:number):void;
}

function callOnList(input:ReadonlyArray<number>, fun:FunctionInterface){
    input.forEach(fun);
}
// inline declaration
function callOnList2(input:ReadonlyArray<number>, fun:{(a:number):void}){
    input.forEach(fun);
}
callOnList(readonlyArray, (a) => {console.log(a)});
callOnList2(readonlyArray, (a) => {console.log(a)});

interface ClockConstructor {
    new (hour: number, minute: number):ClockConstructor;
}

