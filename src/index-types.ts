namespace IndexType {

    class Point {
        x!: number;
        y!: number;
    }

    let p1: Point = {x: 1, y: 2};

    // print all keys
    for (let key in p1) console.log(key);

    function propValue<T, K extends keyof T>(o: T, k: K) {
        return o[k]
    }

    function propValues<T, K extends keyof T[]>(o: T, k: K) {
    }

    console.log(propValue<Point, keyof Point>({x: 1, y: 2}, 'x'));
    console.log(propValues({x: 1, y: 2}, 'length'));

    class Unknown {
        [key: string]: any
    }

    function foo(x: Unknown) {
        console.log(x);
    }

    foo({'d': 1, 'x': 2})

}