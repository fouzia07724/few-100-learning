describe('declaring variables', () => {
    it('an example', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');

    });

    it('what happened above?', () => {
        const name = 'Carl';

    });

    it('declaring a variable with let', () => {
        let age: number | string;
        age = 50;
        age = 51;
        age = 'old';

        let x: any;
        x = 'dog';
        x = 34;
        x = [];

    });

    it('initializing a variable define (infers) the type', () => {
        let name = 'Bob';
        name = 'Steve';
        name = 'Karma';
        // name = 1138; // Error! It is inferred as a string because we created it that way
    });

    it('initializing a variable define (infers) the type', () => {
        let name: string | number = 'Bob';
        name = 'Steve';
        name = 'Karma';
        name = 1138; // No longer an error as name is a union of string and number
    });

    describe('a bit about strings', () => {
        it('can be delimited with single or double', () => {

            const name = 'Bob';
            expect(name).toBe("Bob");

            const story = 'She said "Hello! How are you?" on the way out the door.';

            const author = "Flannery O\'Connell";
            const author2 = 'Flanner O\'Connell';

        });

        it('string literal - interperated strings', () => {
            const name = `Bob`;
            const story = `Chapter 1
            It was a dart and stormy night.
            the End`;

            const age = 27;
            const message = ' the name is ' + name + ' and the age is ' + age + '.';
            const message2 = ` the name is ${name} and the age is ${age}.`; // notice it is backtip at the start and end of string
            expect(message).toBe(message2);
        });

        it('const - be careful', () => {
            // if a variable is array or an object a  than you can not assign a new array to the variable since it is const BUT you can
            // assign a diff value to any of its member
            const x = 12;

            const favoriteNumbers = [2, 4, 6, 8];
            //  favoriteNumbers = [3, 4, 6, 8];  -- can not do this, this involves assignment (=) operator to the variable
            favoriteNumbers[2] = 10; //  assignment (=) is to the favoriteNumbers[2] - 

            const movie = {
                title: ' the rise of Skywalker',
                yearReleased: 2020
            };

            movie.yearReleased = 2019; // you can do this
            // movie.director = 'Abrams'; // can not extend objects
            // movie.yearReleased = '2019'; // can not assign it a diff type


            interface Favmovie {
                title: string;
                yearReleased?: number;
            }

            const otherMovie: Favmovie = {
                title: ' Jaws',
                yearReleased: 2020

            };

        });

        describe('various types', () => {
            it('number literals', () => {
                const bigNumber = 123_456_789.23;

                const color = 0xFF;
                const permissions = 0o33;
                const binary = 0b0101010;
            });

            describe('array destructuring and tuples', () => {
                it('should behave...', () => {
                    const friends = ['David', 'Sean', 'Amy'];

                    // const first = friends[0];
                    // const last = friends[2];
                    const [first, , last] = friends;

                    expect(first).toBe('David');
                    expect(last).toBe('Amy');
                });

                it('using destructuring with rest', () => {
                    const todos = ['Clean Garage', 'Fix tire', 'mop Floors'];

                    const [next, ...others] = todos; // the rest operator.

                    expect(next).toBe('Clean Garage');
                    expect(others).toEqual(['Fix tire', 'mop Floors']); // use toEqaul for comapring Arrays and objects
                });

                it('tuples - basic example', () => {
                    let stuff: [boolean, number]; //typed array. each element of an array has a defined type

                    stuff = [true, 140];

                });

                it('type aliases', () => {

                    type ThingWithLettersAndJunk = string;

                    let name: ThingWithLettersAndJunk;

                    type ArtistNameAndAge = [string, string, number];
                    let warren: ArtistNameAndAge;

                    warren = ['Warren', 'Ellis', 53];

                });

                it('an OOP Example', () => {
                    interface NameResult { fullName: string; length: number; }
                    function formatName(first: string, last: string): NameResult {
                        const fullName = `${last}, ${first}`;
                        return {
                            fullName,
                            length: fullName.length
                        };
                    }

                    //This is valid too but commented out because we have next code
                    //   const answer = formatName('Han', 'Solo');
                    //  expect(answer.fullName).toBe('Solo, Han');
                    //  expect(answer.length).toBe(9);



                    const { fullName, length: john } = formatName('Han', 'Solo'); // object being assigned
                    expect(fullName).toBe('Solo, Han');
                    expect(john).toBe(9);
                });

                it('tuple example', () => {

                    type NameResult = [string, Number];
                    function formatName(first: string, last: string): NameResult {
                        const fn = `${last}, ${first}`;
                        return [fn, fn.length];
                    }

                    //// this is a tuple which is a typed array 
                    const [fullName, length] = formatName('Luke', 'Skywalker');
                    expect(fullName).toBe('Skywalker, Luke');
                    expect(length).toBe(15);
                }
                    
                });

        });

        describe('enums and union constants', () => {
            enum SeatType { window, aisle, middle }

            function getSeatForticket(ticketNumber: number): SeatType {
                if (ticketNumber % 2 === 0) {
                    return SeatType.window;
                } else {
                    return SeatType.aisle;
                }
            }

            it('a truth table', () => {
                expect(true).toBeTruthy();
                expect(false).toBeFalsy();
                expect('').toBeFalsy();
                expect(' ').toBeTruthy();
                expect(undefined).toBeFalsy();
                expect(null).toBeFalsy();
                expect(0).toBeFalsy();
                expect(-1).toBeTruthy();
                // this means if you use one of these as a predicate in an if statement, you will get either true or false.
                // e.g.
                if ('tacos') {
                    // it is true!
                }
            });

            // enums are only typescript
            it('using enums', () => {
                const getMySeat = getSeatForticket(108);
                let cost = 0;
                switch (getMySeat) {
                    case SeatType.window: {
                        cost = 100;
                        break;
                    }
                    case SeatType.aisle: {
                        cost = 150;
                        break;
                    }
                    case SeatType.middle: {
                        cost = 75;
                        break;
                    }
                    default: {
                        // some other thing
                    }
                }
                expect(cost).toBe(100);

            });

            it('with union constants', () => {
                type SeatType = 'aisle' | 'window' | ' middle';

                const mySeat: SeatType = 'window';

                //switch(mySeat) {
                // case ""
                //  }
            });

            it('type assertions', () => {
                let x: any;

                x = 'Tacos';

                const y = x as string;

                expect(y.length).toBe(5);

                const z = <string>x;

                expect((x as string).length).toBe(5);
            });
        });

    }); // end describe enums and union constants

}); // nested 2nd describe













})
