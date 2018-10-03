// function declaration
function foo(this:any, x:number):number{
    console.log(this);
    return x;
}

// function expression (not hoisted)
var bar = function(this:any,x:number){
    console.log(this);
    return x;
};

// full function type
let myAdd: (x:number,y:number) => number = function(x,y): number {return x + y};

let myAdd2: (x:number,y:number) => number;
let myAdd3: {(x:number, y:number):number};

myAdd2 = function(x:number,y:number):number {
    return 1;
};

interface Addable {
    (x:number, y:number): number;
}

let myAdd8: Addable = function (x: number, y: number) {
    return 1;
};

// optional parameter
function optionalParameter(name?:string){}

// default parameter
function defaultParameter(name = "hello"){}

// accessing function context
function functionContext(this:any, name:string){}

// rest parameters
function restParameters(name:string, ...names:string[]){}

let moma = {
    name: 'moma',
    doThis: function(){
        console.log('outter function');
        console.log(this);
    },
    doThat: function(this:void){
        return ()=>{
            console.log('inner function')
            console.log(this);
        }
    }
};

moma.doThis();
moma.doThat()();

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info!: string;
    onClickGood(this: void, e: Event) {
        // oops, used this here. using this callback would crash at runtime
    }
    onClickBad(this: Handler, e: Event) {
        console.log(this.info);
        // oops, used this here. using this callback would crash at runtime
    }
    onClickboth = () => {
        console.log(this.info);
    }
}
let h = new Handler();

let uiElement: UIElement = {
   addClickListener(onclick: (this: void, e: Event) => void){

   }
};
uiElement.addClickListener(h.onClickGood);
// uiElement.addClickListener(h.onClickBad); // does not work because of this
uiElement.addClickListener(h.onClickboth); // does not work because of this

/*
 Arrow functions benefits and draws

 - Arrow functions don't capture this, so you can always pass them to something that expects this: void.
 - The downside is that one arrow function is created per object of type Handler.
 - Methods, on the other hand, are only created once and attached to Handler’s prototype.
 - They are shared between all objects of type Handler.

 */

// overloads

function overload(x:number) : number;
function overload(x:string) : string;
function overload(x:any) : any{
    if(typeof x === 'number'){
        return 1;
    }else{
        return "aString"
    }
}

console.log(overload(1));
console.log(overload("df"));

// Allow null as parameter
function f(sn: string | null): string {
    return sn || "default";
}

