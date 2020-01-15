describe('functions', () => {
    describe('declaring them', () => {
        it('has about three diff ways to doit', () => {

            // expect(add(2, 2)).toBe(4); - can be put before the named function definition

            // 1. Named Function

            function add(a: number, b: number) {
                return a + b;

            }

            // 2. anonymous Function
            const subtract = function(a: number, b: number) {
                return a - b;
            };

            const multiply = (a: number, b: number) => a * b;

            expect(add(2, 2)).toBe(4); // This can be up on top because only named functions can be seen before they are declared
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(9);
        });

        it('details of arrow functions', () => {
            const getMessage = () => 'Howdy';

            expect(getMessage()).toBe('Howdy');
            // If a anonymous function (fat arrow) is returning more than an expression
            // than encolse the function body in {}

            const logIt = (message: string) => {
                console.log(message);
                return 'Logged It';
            };

            expect(logIt('Pizza')).toBe('Logged It');
        });

    });

    describe('arguments to functions', () => {
        it('does not have overloading', () => {

            function formatName(first: string, last: string, mi?: string) {
                let firstPass = `${last}, ${first}`;

                if (mi) {
                    firstPass += ` ${mi}.`;
                }
                return firstPass;
            }



            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('default values for parameters', () => {
            function add(a: number = 15, b: number = 10) {
                return a + b;
            }

            expect(add(2, 2)).toBe(4);
            expect(add(12)).toBe(22);
            expect(add(undefined, 12)).toBe(27); // If we have the first parameter to be optional we have to use "undefined"

        });

        it('you can use that rest operator ...', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);


        });
    });

    describe('higher order functions', () => {
        // A function that takes in one or more arguments that are functions and/or
        // return a function



        describe('higher order functions', () => {
            // A function that takes one or more arguments that are functions and/or
            // return a function
            it('the basic syntax', () => {

                type StringModifier = (msg: string) => string; // StringModifier is a type that takes in a string and return a string
                function logItOut(message: string, f: StringModifier) {
                    console.log(`At ${new Date().toISOString()}: ${f(message)}`);
                }

                logItOut('Tacos', (s: string) => s.toUpperCase());

                function decorate(x: string) {
                    return `***${x}***`;
                }

                logItOut('Burrito', decorate);
            });

            describe('HOF that returns a function', () => {

                it('with just a normal ', () => {
                    // <element>content</element>

                    function tagMaker(element: string, content: string) {
                        return `<${element}>${content}</${element}>`;
                    }

                    expect(tagMaker('customer', 'Bob Smith')).toBe('<customer>Bob Smith</customer>');
                    expect(tagMaker('customer', 'Sue Jones')).toBe('<customer>Sue Jones</customer>');
                });

                it('oop version', () => {

                    class TagMaker {
                        private element: string;

                        constructor(element: string) {
                            this.element = element;
                        }

                        make(content: string) {
                            return `<${this.element}>${content}</${this.element}>`;
                        }

                    }

                    const customerMaker = new TagMaker('customer');

                    expect(customerMaker.make('Bob Smith')).toBe('<customer>Bob Smith</customer>');


                });

                it('how a functional programmer would do it.', () => {

                    function tagMaker(element: string) {
                        return (content: string) => `<${element}>${content}</${element}>`;
                    }

                    const customerMaker = tagMaker('customer');

                    expect(customerMaker('Bob Smith')).toBe('<customer>Bob Smith</customer>');
                });

            });


        });

    });
