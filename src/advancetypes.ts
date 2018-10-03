namespace advancetypes{
// intersect types
    class Ab{constructor(x:string){}}
    class Ba{constructor(y:string){}}

    function unionTypes(ab:Ab,ba:Ba): Ab & Ba{
        let result = <Ab & Ba>{} ;
        for (let attr in ab) (<any>result)[attr] = (<any>ab)[attr];
        for (let attr in ba) if(!result.hasOwnProperty(attr)) (<any>result)[attr] = (<any>ba)[attr];
        return result;
    }

    console.log(unionTypes({x:'1'},{y:'3'}));


// Union types
    function intersectTypes(param:string|number){}

// type guard
    class Fish{swim(){}}
    class Bird{}
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }

// typeof guard
    let val1:string | number = 'asdf';
    if(typeof val1 === 'string') console.log(val1.charAt(1));
    if(typeof val1 === 'number') console.log('has no properties');

// instanceof guard
    let fish = new Fish();
    if(fish instanceof Fish) console.log(fish.swim());

// type aliase
    type Exocoetidae = Fish | Bird;

    function createExocoetidae(): Exocoetidae{
        return {
            swim(){}
        }
    }

    type Container<T> = { value: T };

    type LinkedList<T> = T & { next: LinkedList<T> };

    interface Person {
        name: string;
    }

    var people: LinkedList<Person> = {name:'Jason', next: {name:'Smith', next: {}}} as LinkedList<Person>;
    console.log(people.name);
    console.log(people.next.name);
    console.log(people.next.next.name);

    // String literal types
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
    function stringLiteralTypes(easing:Easing){
        if(easing === 'ease-in') console.log('ease in');
        if(easing === 'ease-out') console.log('ease out');
        if(easing === 'ease-in-out') console.log('ease-in-out');
    }

    stringLiteralTypes('ease-in');

    function createElement(tagName: "img"): HTMLImageElement;
    function createElement(tagName: "input"): HTMLInputElement;
    function createElement(tagName: string): Element {
        return {} as Element;
    }

    function numericLiteralTypes(): 1 | 2 | 3 | 4 | 5 | 6 {
        return 1;
    }

    // discriminated unions

    interface Square {
        kind: "square";
        size: number;
    }
    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }
    interface Circle {
        kind: "circle";
        radius: number;
    }

    interface Triangle {
        kind: "triangle";
        width: number;
        height: number;
    }

    type Shape = Square | Rectangle | Circle | Triangle;

    let shape1:Shape = {
        kind:'rectangle',
        width: 1,
        height: 1
    };

    function area(s: Shape):number {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
            case "triangle": return (s.height * s.width) / 2;
        }
    }

    area({kind:'rectangle', width:1, height: 1});

    // index types
    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
        return names.map(n => o[n]);
    }

    interface Person {
        name: string;
        age: number;
    }
    let person: Person = {
        name: 'Jarid',
        age: 35
    };
    let strings: string[] = pluck(person, ['name']); // ok, string[]
    let everything: any[] = pluck(person, ['name', 'age']); // ok, string[]

    console.log(strings);
    console.log(everything);
    let allKeysOfPerson:keyof Person;

    // index access operator T[K]
    function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
        return o[name]; // o[name] is of type T[K]
    }

    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    }
    type Partial<T> = {
        [P in keyof T]?: T[P];
    }

    type PersonPartial = Partial<Person>;
    type ReadonlyPerson = Readonly<Person>;

    // type Proxy<T> = {
    //     get(): T;
    //     set(value: T): void;
    // }
    // type Proxify<T> = {
    //     [P in keyof T]: Proxy<T[P]>;
    // }
    // function proxify<T>(o: T): Proxify<T> {
    //     return {};
    //     // ... wrap proxies ...
    // }

    // conditional types
    class Foo{}
    class Bar extends Foo{}
    let foo: Bar extends Foo ? Person : Circle;

    type X = "Foo";

    function aef<Z>(e:Z){
        return 'asd';
    }

    let deadf = aef<String>('string');
    let asdfwef = aef<Number>(1);



}
