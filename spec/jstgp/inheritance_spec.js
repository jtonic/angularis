/**
 * Created by jtonic on 04.11.2015.
 */

"use strict";

describe('inheritance', function() {

    let Mammal = function(name) {
        this.name = name
    }
    Mammal.prototype.get_name = function() {
        return this.name
    }
    Mammal.prototype.says = function() {
        return this.saying || ''
    }

    Function.prototype.method = function(name, func) {
        if(!this.prototype[name]) {
            this.prototype[name] = func
            return this
        }
    }

    Function.method('inherits', function(Parent){
        this.prototype = new Parent()
        return this // this doesn't work in order to use cascade
    })

    it('pseudoclassical', function() {
        let dog = new Mammal('Milli')
        expect(dog.get_name()).toBe('Milli')
        expect(dog.says()).toBeFalsy()
        var Cat = function(name) {
            this.name = name
            this.saying = 'meow'
        }
        Cat.prototype = new Mammal()
        let cat = new Cat('Fluffy')
        expect(cat.get_name()).toBe('Fluffy')
        expect(cat.says()).toBeTruthy()
        expect(cat.says()).toBe('meow')

        Cat.prototype.get_name = function() {
            return `Cat says my name is ${this.name}!!!`
        }
        expect(cat.get_name()).toBe('Cat says my name is Fluffy!!!')
        let Mouse = function(name) {
            this.name = name
            this.saying = 'chits'
        }
        .inherits(Mammal)
        Mouse.prototype.says = function() {
            return `The mouse says my name is ${this.name}`
        }
        let mouse = new Mouse('Jerry')
        expect(mouse.get_name()).toBe('Jerry')
        expect(mouse.says()).toBe('The mouse says my name is Jerry')
    })

    it('differential inheritance', function() {
        let myMammal = {
            name: 'Tom',
            get_name: function() {
                return this.name;
            },
            says : function(){
                return this.saying || '';
            }
        }
        let cat = Object.create(myMammal)
        cat.saying = 'meow'

        expect(cat.says()).toBe('meow')
        expect(cat.get_name()).toBe('Tom')
        cat.name = 'Tommy'
        expect(cat.get_name()).toBe('Tommy')
    })
})
