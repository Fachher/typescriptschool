namespace Types {
    class Point {
        x!: number;
        y!: number;
        z!: number;
        name!: string;
    }

    type PointAlias = Point;

    type NamelessPoint = {
        [K in keyof Point]: number
    }
}

