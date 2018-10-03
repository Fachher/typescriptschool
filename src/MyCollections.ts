export namespace MyCollection {

    interface Collection<T> {
        add(elem: T): void;
    }

    export interface List<T> extends Collection<T>, Iterable<T> {
        forEach(callback: { (this: void, item: T, index?: number): void }): void;

        getIterator(): Iterator<T>;

        sort(): List<T>;

        size(): number;
    }

    interface ListConstructor<T> {
        new(): List<T>;
    }

    function createList<T>(ctor: ListConstructor<T>): List<T> {
        return new ctor();
    }

    export function arrayList<T>(): List<T> {
        return createList<T>(ArrayList);
    }

    class ArrayList<T> implements List<T> {

        constructor(private inner: T[] = []) {
        }

        getIterator(): Iterator<T> {
            return this[Symbol.iterator]();
        }


        add(elem: T): void {
            this.inner.push(elem);
        }

        forEach(callback: { (this: void, item: T, index?: number): void }): void {
            for (let i = 0; i < this.inner.length; i++) {
                callback(this.inner[i], i);
            }
        }

        [Symbol.iterator](): Iterator<T> {
            let inner = this.inner;
            let index = 0;

            return {
                next(value?: any): IteratorResult<T> {
                    return {
                        done: inner.length == index,
                        value: inner[index++]
                    }
                }
            };

        }

        sort(): MyCollection.List<T> {
            const inner = this.inner;

            if (inner.length < 2) {
                return new ArrayList(inner);
            } else {
                return new ArrayList(this.bubblesort([...inner]));
            }
        }

        private bubblesort(list: T[]): T[] {
            let sorted: boolean = false;
            while (!sorted) {
                for (let i = 0; i < list.length; i++) {
                    if (i == list.length - 1) {
                        sorted = true;
                        break;
                    }
                    if (list[i] > list[i + 1]) {
                        this.swap(list, i, i + 1);
                    }
                }
            }
            return list;
        }

        private swap(list: T[], i: number, number: number) {
            const temp: T = list[i];
            list[i] = list[i + 1];
            list[i + 1] = temp;
        }

        size(): number {
            return this.inner.length;
        }
    }

    export class Queue<T> {
        constructor(private inner: T[] = []) {
        }

        put(elem: T): void {
            this.inner.push(elem);
        }

        // TODO: add put method and create interface which calls add on list and put on Queue

    }

// Tests
}

let listOfStrings = MyCollection.arrayList<String>();
listOfStrings.add("Hamburg");
listOfStrings.add("Frankfurt");
listOfStrings.forEach(item => {
    console.log(item);
});
listOfStrings.forEach(function (item) {
    console.log(item);
});

console.log("Calling for 'of' on listOfStrings");
for (let val of listOfStrings) {
    console.log(val);
}

let listOfNumbers = MyCollection.arrayList<Number>();
listOfNumbers.add(4);
listOfNumbers.add(1);
listOfNumbers.add(3);
listOfNumbers.add(2);
listOfNumbers.forEach((item, index) => {
    console.log(`index:${index} => ${item}`);
});

listOfNumbers.sort().forEach(i => console.log(i));

