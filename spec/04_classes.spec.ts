// import { Employee, Retiree, givePromotion } from '../hr';
import * as fromHr from '../hr';


describe('using classes', () => {

    describe('importing them and stuff', () => {
        it('should behave...', () => {
            const emp1 = new fromHr.Employee();
            const ret1 = new fromHr.Retiree();


            fromHr.givePromotion(emp1);
        });
    });




    describe('creating them', () => {
        it('you can just make them like anything  - and constructors', () => {

            class Car {

                private _primaryDriver: string;
                constructor(public make: string, public model: string, private startingMileage: number) {/* this is usually empty */ }

                get mileage() { return this.startingMileage; }

                get primaryDriver() { return this._primaryDriver; }
                set primaryDriver(newValue: string) { this._primaryDriver = newValue.toUpperCase(); }

                // all methods are public by default in typescript, In Javascript as well they are all public
                go() {

                }

                stop() {

                }

                private fillup(amount: number) {

                }
            }

            const myCar = new Car('Chevy', 'Bolt', 19_000);


            expect(myCar.make).toBe('Chevy');

            expect(myCar.mileage).toBe(19_000);
            myCar.primaryDriver = 'Jeff';
            expect(myCar.primaryDriver).toBe('JEFF');



        });
    });





});
