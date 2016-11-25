/* global display */
'use strict';

// function Cat(name, color) {
//    this.name = name
//    this.color = color
// }

// var cat = new Cat('Fluffy', 'White');

var cat = Object.create(Object.prototype,
    {
        name: {
            value: 'Fluffy',
            enumerable:true,
            writable:true,
            configurable:true
        },
        color: {
            value: 'White',
            enumerable:true,
            writable:true,
            configurable:true
        },
        age: {
            value: 38,
            enumerable:true,
            writable:true,
            configurable:true
        }
    }
);

display(cat)

/*

So far we've looked at two different ways of creating objects--using object literals and using constructor functions with the new keyword. It's worth noting that these are basically just syntactic sugar for object.create. We could create these same objects using the object.create syntax as follows. Let's go ahead and comment this out. And in place of this, we'll use this syntax. 

var cat = Object.create(Object.prototype,
    {
        name: {
            value: 'Fluffy',
            enumerable:true,
            writable:true,
            configurable:true
        },
        color: {
            value: 'Fluffy',
            enumerable:true,
            writable:true,
            configurable:true
        }
    }
);


You can see here that we're using the object.create function to create our new object. And we're passing in the object that will become the prototype for our new object. And then down here, you can see that we're creating the name and color properties.

    name: {
        value: 'Fluffy',
        enumerable:true,
        writable:true,
        configurable:true
    },
    color: {
        value: 'Fluffy',
        enumerable:true,
        writable:true,
        configurable:true
    }

For each of those properties, you can see that we're assigning the value and setting the enumerable, writable, and configurable properties to true. This all happens for us when using either object literals or constructor functions. Now aren't you glad that you don't have to do all that every time you create an object? The constructor function approach actually does a little bit more than this with regards to the prototype and the constructor. But essentially this is what's happening in both cases with respect to creating the objects. You can see that it's much nicer to be able to use object literals or constructor functions instead of having to do all of this. You may be wondering what those enumerable, writable, and configurable attributes are. We'll talk about that in the next module about properties. But before we jump into that, let's take a look at ES6 classes, another way to create objects.


*/