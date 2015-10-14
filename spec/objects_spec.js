/**
 * Created by jtonic on 13.10.2015.
 */

"use strict";

describe('objects', function () {
    it('object literal', function () {
        let person  = {
            firstName: 'Antonel',
            lastName: 'Pazargic',
            printName: function () {
                console.log(`${this.firstName} ${this.lastName}`);
            }
        };
        expect(person.firstName).toBe('Antonel');

        var obj1 = {
            name: 'Antonel',
            __proto__: {
                age: 45
            }
        };
        expect(obj1.name).toBe('Antonel');
        expect(obj1.age).toBe(45);

        var obj2 = {name: 'Liviu'};
        Object.setPrototypeOf(obj2, {age: 32});
        expect(obj2.name).toBe('Liviu');
        expect(obj2.age).toBe(32);

        let irina = Object.create({age: 25}, {name: {value: 'Irina'}});
        expect(irina.name).toBe('Irina');
        expect(irina.age).toBe(25)
    });

    it('constructor', function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Person.prototype.printName = function() {
            console.log(`${this.firstName} ${this.lastName}`);
        };
        let p1 = new Person('Antonel', 'Pazargic');
        expect(p1.firstName).toBe('Antonel');
        expect(p1.lastName).toBe('Pazargic');

        let p2 = new Person('Viorel', 'Dragoi');
        expect(p2.firstName).toBe('Viorel');
        expect(p2.lastName).toBe('Dragoi');
    });

    it('Object.prototype is null for literal objects', function () {
        console.log(`Object.prototype = ${JSON.stringify(Object.prototype)}`);
        console.log(`Object.prototype = ${Object.prototype}`);
        expect(Object.prototype).toEqual({});

        let obj = {name: 'Antonel'};
        expect(obj.__proto__).toEqual(Object.prototype)
    });

    it('Object prototype of constructor based objects', function () {
        function Person(name) {
            this.name = name;
        }
        let antonel = new Person('Antonel Pazargic');
        expect(antonel.name).toBe('Antonel Pazargic');
        expect(antonel.__proto__.constructor).toEqual(Person);
        expect(antonel.__proto__).toEqual(Person.prototype);
    });

    it('Prototyping for Constructor based objects', function () {
        function Student(name) {
            this.name = name
        }
        Student.prototype.getPresentationName = function() {
            return `Student name = ${this.name}`
        };
        let antonel = new Student('Antonel Ernest Pazargic');
        expect(antonel.getPresentationName()).toEqual('Student name = Antonel Ernest Pazargic')
    });

    it('inheritance of constructor based objects', function () {
        function School(schoolName) {
            this.schoolName = schoolName;
        }
        School.prototype.getSchoolName = function () {
            return this.schoolName;
        };
        function Student(studentName, schoolName) {
            this.studentName = studentName;
            School.call(this, schoolName);
        }
        Student.prototype = new School();
        Student.prototype.constructor = Student;
        Student.prototype.getStudentName = function () {
            return this.studentName;
        };
        let antonel = new Student('Antonel Pazargic', 'School no. 5');
        expect(antonel.getStudentName()).toBe('Antonel Pazargic');
        expect(antonel.getSchoolName()).toBe('School no. 5');
    });

    it('Primitives wrappers', function () {
        let a = 'Antonel';
        let b = new String('Antonel');
        console.log(`a type = ${typeof a}`);
        console.log(`b type = ${typeof b}`);
        expect(true).toBe(a == b);
        expect(false).toBe(a === b);
        expect(a).toBe(b.valueOf());
        expect(a).toEqual(b);

        expect(typeof a).toBe('string');
        expect(typeof b).toBe('object');
        expect(a.length).toBe(7);
    });

});