// 3.1. start with example
/* global display */
'use strict'

// create an array
var arr = ['red', 'blue', 'green']

// let's get the last element of the array
var last = arr[arr.length-1]
display(last);

// I could replace the above code with this:

'use strict'

// create an array
var arr = ['red', 'blue', 'green']

// let's get the last element of the array
Object.defineProperty(arr, 'last', {get: function(){
    return this[this.length-1]
}})

var last = arr.last;

// but this array does not have the last property,
// so if I try to access it, I get 'undefined'
var arr2 = ['one', 'two', 'three']
display(arr2.last)

/*
WHAT WE NEED TO DO IS PUT 'last'
ON THE ARRAY OBJECT'S PROTOTYPE!
// full code
*/
'use strict'

var arr = ['red', 'blue', 'green']
// the above is same as: var arr = new Array('red', 'blue', 'green')

Object.defineProperty(Array.prototype, 'last', {get: function(){
    return this[this.length-1]
}})
var last = arr.last
var arr2 = ['one', 'two', 'three']
display(arr2.last)

// SO WHAT IS A PROTOTYPE?
/* -----------------------

A prototype is an object that exists on every function in JavaScript.

Notice that if I create a new function, it has a prototype property.
Also notice that prototype property is just an empty object.
'use strict'

var myFunc = function() {}
display(myFunc.prototype)

Objects, however, don't have a prototype property.
So if I create a new object and try to view its prototype property, that is undefined.
var cat = {name: 'Fluffy'}
display(cat.prototype) // returns 'undefined'

An object does have a __proto__ property, however:
display(cat.__proto__)

So an object really does have a prototype assigned to it. But an object's prototype and 
a function's prototype are used differently.

DEFINITIONS:

A FUNCTION'S PROTOTYPE: 
A function's prototype is the object INSTANCE that will become the prototype for
all objects created using this function as a constructor.

AN OBJECT'S PROTOTYPE:
An object's prototype is the object INSTANCE from which the object is inherited.

---

So when a function is created, it gets a prototype object created and attached to it
behind the scenes. If that function is then used as a constructor function with the
new keyword, the object that is created has a proto property that is pointing to
the same object that is the function's prototype. This is much easier to understand 
with code, so let's take a look.

For example, let's use our Cat function. To start with, let's look at its prototype:

'use strict'

function Cat(name, color) {
    this.name = name
    this.color = color
}
 display(Cat.prototype) // so you can see here that our function has a prototype
 
So you can see here that our function has a prototype. Now let's create a
new cat from that constructor function.

'use strict'

function Cat(name, color) {
    this.name = name
    this.color = color
}

var fluffy = new Cat('Fluffy', 'White')

display(Cat.prototype) 

And let's look at Fluffy's prototype.

display(fluffy.__proto__)


And let's look at Fluffy's prototype. You can see that they both have the same shape.
However, they're not just the same shape. They're pointing to the exact same 
instance of an object.

You can see that they are equal:
display(Cat.prototype === fluffy.__proto__)

Both instances of cat are pointing to the same prototype instance.


INSTANCE VS. PROTOTYPE PROPERTIES

Okay, so we've seen how adding a property to a function's prototype affects
all objects constructed using that function. But let's take a closer look 
at what exactly is happening behind the scenes. Specifically, let's look at 
exactly where those properties live.



*/