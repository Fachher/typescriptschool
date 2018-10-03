namespace Persons {
    export interface Person {
        firstName: string;
        lastName: string;

        // index signature
        [additionalName: string]: any;
    }

    export class Room {
        name: string;
        number?: number;
        location!: string;

        constructor(name: string, number?: number) {
            this.name = name;
            this.number = number;
        }
    }
}