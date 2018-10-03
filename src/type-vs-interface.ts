namespace typeVsInterface {
    interface PointInterface {
        x: number;
        y: number;
    }

    type PointType = {
        x: number;
        y: number;
    }

    interface ThreeDimension extends PointType {
        z: number
    }

    class Rectangle implements PointType {
        x = 1;
        y = 2;
    }

    const getRectangleAreaInterface = (args: PointInterface) => args.x * args.y;
    const getRectangleAreaAliased = (args: PointType) => args.x * args.y;

    getRectangleAreaAliased({x: 1, y: 2});
    getRectangleAreaInterface({x: 1, y: 3});

    class Point {
        public x!:number;
        public y!:number;
    }

    type PointAlias = Point;

    function usePointAlias(x:PointAlias){}

    interface Shape {
        area(): number;
    }

    type Perimeter = {
        perimeter(): number
    }

    type RectangleShape = Point & Shape & Perimeter;
    type RectangleShapeOptional = Partial<Shape & Perimeter> & Point;

    function optionalRectangle(rect:RectangleShapeOptional){}

    optionalRectangle({
        x: 1,
        y: 2
    });

    optionalRectangle({
        x: 2,
        y: 3,
        area(){
            return 1;
        }
    });

    optionalRectangle({
        x: 2,
        y: 3,
        area() {
            return 1;
        },
        perimeter() {
            return 234;
        }
    });

    // union type

    interface A{}
    interface B{}
    interface C{}

    interface D extends A,B,C{}
    type E = A & B & C;


}


