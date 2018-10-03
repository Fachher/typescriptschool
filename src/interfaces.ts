namespace Interfaces{

    interface Point {
        x: number;
        y: number;
    }

    // extend interface Point
    interface Point{
        z?: number;
    }

    interface Name{
        name: string;
    }

    type NamedPoint = Point & Partial<Name>;

    function drawPoint(np:NamedPoint){}
    drawPoint({x: 2, y: 2});
    drawPoint({x: 2, y: 2, name: 'p1'});


}