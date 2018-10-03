export class Point{

    static origin = Point.point(0,0);

    private _name!:string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

// parameter property
    private constructor(readonly x: number, readonly y: number) {}

    public addCoordinates(other:Point) : Point{
       return Point.point(this.x + other.x, this.y + other.y);
    }

    public static point(x: number, y: number){
        return new Point(x, y);
    }
}

export default class Rectangle{
    private lowerLeft:Point;
    private upperRight:Point;

    constructor(lowerLeft: Point, upperRight: Point) {
        this.lowerLeft = lowerLeft;
        this.upperRight = upperRight;
    }
}

let p1:Point = Point.point(1,1);
console.log( p1!.y );