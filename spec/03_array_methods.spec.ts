import { isEven, identity } from './utils';

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('checking the membership of an array', () => {
        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);

        const someEven = numbers.some(isEven);
        expect(someEven).toBe(true);
    });

    it('visiting every member of an array', () => {
        // this is a less than optimal example
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(45);
    });
    describe('array methods that create new arrays', () => {
        it('map.', () => {

            function doubleIt(n: number) {
                return n + n;
            }

            const doubled = numbers.map(doubleIt);

            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const dup = numbers.map(identity);
        });
    });
});


describe('two loops you might use but probably wont', () => {
    it('for in loop', () => {
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let total = 0;
        // for (const num in numbers) {
        //     total += num;
        // }

        // expect(total).toBe(45);
        // Enumerate the Properties of An Object
        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };

        for (const prop in book) {
            console.log(`Book's ${prop} is ${book[prop]}`);
        }
    });

    it('for of loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const n of numbers) {
            total += n;
        }

        expect(total).toBe(45);
    });
});
