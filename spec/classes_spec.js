/**
 * Created by jtonic on 14.10.2015.
 */
"use strict";

describe('classes', function () {

    it('simple definition', function () {
        class Student {
            constructor(name) {
                this.name = name;
            }
        }
        let antonel = new Student('Antonel');
        expect(antonel.name).toBe('Antonel');
    });

    it('inheritance', function () {
        function A(a) {
            this.a = a;
        }
        A.prototype.printA = function () {
            console.log(this.a);
        };
        class B extends A {
            constructor(a, b) {
                super(a);
                this.b = b;
            }
            printB() {
                console.log(this.b)
            }
        }
        class C extends B {
            constructor(a, b, c) {
                super(a, b);
                this.c = c;
            }
            printC() {
                console.log(this.c);
            }

            static getTheValueOf(c) {
                return c.c;
            }
        }
        let a = new A('a');
        let b = new B(a.a, 'b');
        let c = new C(b.a, b.b, 'c');

        c.printA();
        c.printB();
        c.printC();

        expect(a.a).toBe(c.a);
        expect(a.a).toBe(b.a);
        expect(b.b).toBe(c.b);

        expect(C.getTheValueOf(c)).toBe('c');

        function fun() {
            return new D('d');
        }

        expect(fun).toThrowError(ReferenceError);
        class D {
            constructor(d) {
                this.d = d;
                return new A('a');
            }
        }
        expect(new A('a') instanceof A).toBe(true, 'New A is not instance of A');
        expect(new D('d') instanceof D).toBe(false, 'New D is instance of D');
        expect(new D('d') instanceof A).toBe(true);
    });

    it('species', function () {
        class MyArray1{
            static get [Symbol.species] () {
                return this;
            }

            mapping() {
                return new this.constructor[Symbol.species]();
            }
        }

        class MyArray2 extends MyArray1 {
            static get [Symbol.species] () {
                return MyArray1;
            }
        }

        let a1 = new MyArray2();
        expect(a1 instanceof MyArray1).toBe(true, 'Instances of MyArray2 should be of type MyArray1');

        a1 = a1.mapping();
        expect(a1 instanceof MyArray1).toBe(true, 'Instances of MyArray2.mapping should be of type MyArray1');

    });

    it('new.target - not yet supported by  node 4.2.1', function () {
        function MyConstructor() {
            //console.log(new.target.name);
            console.log('new.target.name');
        }

        class MyClass extends MyConstructor {
            constructor() {
                super();
            }
        }
        let i1 = new MyConstructor();
        let i2 = new MyClass();
    });

    it('super in concise methods of the object literals', function () {
        let var1 = {
            print() {
                console.log('Hello');
            }
        };
        let var2 = {
            print() {
                super.print();
            }
        };
        expect(var2.print).toThrowError(TypeError);
        Object.setPrototypeOf(var2, var1);
        expect(var2.print).not.toThrowError(TypeError);
    });

    it('accessor properties', function () {
        class Person {
            constructor(name) {
                this.__name__ = name;
            }

            get name() {
                return this.__name__;
            }

            set name(name) {
                this.__name__ = name;
            }
        }

        let p = new Person('Antonel');
        expect(p.name).toBe('Antonel');

        p.name = 'Liviu';
        expect(p.name).toBe('Liviu');
        //expect(p.__proto__).toContain("name");
        expect("name" in p.__proto__).toBe(true);
        expect("name" in Person.prototype).toBe(true);
        console.log('Object.getOwnPropertyDescriptor=',Object.getOwnPropertyDescriptor(p.__proto__, "name").set)
    });
});