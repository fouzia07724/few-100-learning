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

    it('using reduce', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = numbers.reduce((s, n) => s + n);
        expect(total).toBe(45);
        total = numbers.reduce((s, n) => s + n, 100);
        expect(total).toBe(145);
    });

    describe('an example', () => {
        it('the example', () => {
            // given a cart
            interface CArtItem {
                description: string;
                qty: number;
                price: number;
            }

            const cart: CartItem[] = [
                { description: 'Eggs', qty: 3, price: 2.37 },
                { description: 'Bread', qty: 2, price: 3.50 },
                { description: 'Beer', qty: 6, price: 7.50 }
            ];

            // I want to know the total quantity and total price

            interface Shippinginfo {
                totalQty: number;
                totalPrioce: number;
            }

            const starter: ShippingInfo = {
                totalQty: 0,
                totalPrice: 0,
            };
            const result = cart.reduce((s: ShippingInfo, n: CartItem) => {
                return {
                    totalQty: s.totalQty += n.qty,
                    totalPrice: s.totalPrice += n.price
                };
            }, starter);

            // 0+ 3 = 3
            // 3+2 = 5
            // 5 + 6 = 11

            // 0 + 2.37 = 2.37
            // 2.37 + 3.50 = 5.87
            // 5.87 + 7.50 = 13.37
            expect(result.totalPrice).toBeCloseTo(13.37, 2);
            expect(result.totalQty).toBe(11);




        });
    });
});

})
