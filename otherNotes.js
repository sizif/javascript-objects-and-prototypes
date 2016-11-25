/*
6: Using Object.create() to Create JS Objects
---------------------------------------------

Using object literals and using constructor functions with
the new keyword are just syntactic sugar for Object.create:

// var cat = new Cat('Fluffy', 'White');
var cat = Object.create(Object.prototype,
    {
        name: {
            value: 'Fluffy',
            enumerable: true,
            writable: true,
            configurable: true
        },
        color: {
            value: 'White',
            enumerable: true,
            writable: true,
            configurable: true
        }
    }
);

display(cat)

What are these enumerable, writable and configuarable 
arguments? We'll get back to that.

7: Using ECMAScript 6 Classes to Create JS Objects
--------------------------------------------------

'use strict'

class Cat {
    constructor(name, color) {
        this.name = name,
        this.color = color
    }
    // we can also add methods to our class like this:
    speak() {
        display('Meeeow')
    }
}

var cat = new Cat('Fluffy', 'White');

display(cat)
cat.speak()


SO THERE ARE 4 WAYS TO CREATE OBJECTS IN JS:
1. Object Literals
2. Constructor Functions
3. Object.create
4. ES6 Classes

2: JS OBJECT PROPERTIES
2.2 Using Bracket Notation to Access JS Properties
--------------------------------------------------

'use strict'

var cat = {
    name: 'Fluffy',
    color: 'White'
}

display(cat['color'])

// So why would you ever use bracket notation?

Well, what if you for some reason needed to create
a property on an object using a property name that
is not a valid identifier? For example, let's create
a property on our cat called Eye Color:

cat['Eye Color'] = 'Green';

// Still, why would you ever wanna do this?

A: Maybe to create an obj out of values entered by
a user. Or it's possible to have a source of JSON data
that has property names that are not valid identifiers.

2.3. USING JS PROPERTY DESCRIPTORS
----------------------------------

'use strict'

var cat = {
    name: 'Fluffy',
    color: 'White'
}

display(Object.getOwnPropertyDescriptor(cat, 'name'))

// the display() call with the above argument passed in,
// returns this:

Object {
    value: Fluffy
    writable: true
    enumerable: true
    configurable: true
}

// let's make the name property not writable:
'use strict'

var cat = {
    name: 'Fluffy',
    color: 'White'
}

Object.defineProperty(cat, 'name', {writable: false})
display(Object.getOwnPropertyDescriptor(cat, 'name'));

// Even though the name property is read only, we can change the value
// of a property of the object that the name property is pointing to:
'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {writable: false})
cat.name.first = 'Scratchy';
display(cat.name);

This makes sense when you think about it since name is really just a pointer.
And when you make it read-only, you're only preventing that pointer from
being changed.

You actually can prevent the object from being changed by using object.freeze
like this:
'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {writable: false});
Object.freeze(cat.name);
cat.name.first = 'Scratchy';
display(cat.name);

And now that that's frozen, you can see that I'm getting an error because the
entire name object is now read-only in addition to the actual name property. So
just keep that in mind if you ever make a property read-only, that if the property
contains an object, you'll need to freeze the object also in order to prevent it 
from being changed.

2.5. USING THE ENUMERABLE ATTRIBUTE
-----------------------------------

// you can use the for...in loop to loop over each of the properties
in any object like this:

for (var propertyName in cat) {
    display(propertyName)
}

// and now we can display both the name of the property and the value of the
// property using bracket notation:

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName])
}

// By default, properties on an object are enumerable, meaning we can loop over
// them using a for...in loop. Let's make enumerable false on the name property.

'use strict'

var cat = {
    name: {first:'Fluffy', last:'LaBeouf'},
    color:'White'
}

Object.defineProperty(cat, 'name', {enumerable: false})

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName])
}

// You can look at an object's keys like this:
Object.keys(cat)

// Now let's just display that:
display(Object.keys(cat))

// SETTING ENUMERABLE TO FALSE AFFECTS JSON serialization OF THE OBJECT.

// Notice if I serialize my cat object to JSON that I can get the whole object:
display(JSON.stringify(cat))

// However you can still look at the property with the bracket notation:
display(cat['name'])

// So setting enumberable to false does not change the ability to look at the property. 
// You just can't enumerate it, see it in the object's keys, or serialize it.

2.6 USING THE CONFIGURABLE ATTRIBUTE

// Say we wanna lock down the cat's name property so that its attributes can't be
// changed:

'use strict'

var cat = {
    name: {first: 'Fluffy', 'last': 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {configurable: false});

// ONCE YOU MADE A PROPERTY NON-CONFIGURABLE, YOU CAN'T MAKE IT CONFIGURABLE AGAIN
// You can still change the writable property, though.
// Finally, you can't delete a property:
delete cat.name // won't work!

2.7. USING GETTERS AND SETTERS
------------------------------

Attributes on a property that let you specify the return value of a property 
using a function and set the value of a property using a function. But you
can access the property just like you would any other property.

To create getters and setters use defineProperty:

Object.defineProperty(cat, 'fullName', 
    {
        get: function() {
            return this.name.first + ' ' + this.name.last;
        }
    }
);

display(cat.fullName)

// Now what if we wanted to be able to set the first and last name based off of
// setting the full name? Well, let's add a setter for that:

Object.defineProperty(cat, 'fullName', 
    {
        get: function() {
            return this.name.first + ' ' + this.name.last;
        },
        set: function(value) {
            var nameParts = value.split(' ');
            this.name.first = nameParts[0];
            this.name.last = nameParts[1];
        }
    }
);

cat.fullName = 'Muffin Top';
display(cat.fullName);

// SUMMARY
// Using writable, enumerable, configurable property attributes, plus 
// how to use property Getters and Setters to create powerful properties
// backed by functions.


*/