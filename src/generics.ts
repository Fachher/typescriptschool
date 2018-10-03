function acceptAll(arg: any): any {
    return arg;
}
function identity<T>(arg: T): T {
    return arg;
}

interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

class Pair<T>{
    private a:T;
    private b:T;

    constructor(a:T, b:T) {
        this.a = a;
        this.b = b;
    }

}

class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

let genericNumber = new GenericNumber<number>();
genericNumber.add = (x:number,y:number) => {
    return x + y;
};

let pair = new Pair(1,1);

// Only for arguments having length

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity([1,2,3,4]);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

getProperty({a:'12'}, 'a');

class Class1{
    private x:number;

    constructor(x: number) {
        this.x = x;
    }
}

class Class2{
    private x:number;

    constructor(x: number) {
        this.x = x;
    }
}

// factories
function create<T>(c: {new(x:number): T; }, param:string): T {
    return param === 'a' ? new c(12): new c(15);
}

create(Class1, "a");
create(Class2, "b");

class BeeKeeper {
    hasMask!: boolean;
}

class ZooKeeper {
    nametag!: string;
}

class Animal {
    numLegs!: number;
}

class Bee extends Animal {
    keeper!: BeeKeeper;
}

class Lion extends Animal {
    keeper!: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

