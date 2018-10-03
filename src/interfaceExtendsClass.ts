class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     select() { }
// }
//
// class Location {
//
// }

class Point{
    private x:number;


    constructor(x: number) {
        this.x = x;
    }
}

class Point1D extends Point{

}

interface Pointless extends Point{

}

class Point2D extends Point1D implements Pointless{

}
