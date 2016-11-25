/* global display */
'use strict'

var myFunc = function() {}
display(myFunc.prototype)

var cat = {name: 'Fluffy'}
display(cat.prototype)

display(cat.__proto__)

/*
3-3 What is a prototype?

So what is a prototype? A prototype is an object that exists on every function in JavaScript. So notice if I create a new function like this, 

var myFunc = function() {}

notice that it has a prototype property. 

display(myFunc.prototype)


Also notice that prototype property is just an empty object. Objects, however, do not have a prototype property. So if I create a new object and try to view its prototype property, that is undefined.

var cat = {name: 'Fluffy'}
display(cat.prototype)


An object does have a proto property, however. Let's take a look at that. 

display(cat.__proto__)


So an object really does have a prototype assigned to it. But an object's prototype and a function's prototype are used differently. So let's provide a couple of definitions that we can work with going forward. These might not make a lot of sense now, but they will once we provide a few examples. So here are a couple of definitions. 

A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor. 

An object's prototype is the object instance from which the object is inherited. 

Again, don't worry about these definitions too much right now. We'll show a few examples, and the should make a lot more sense next time we display them. It is important, though, to take note of the word instance in those definitions. A prototype is not like a class. It is actually an object. So when a function is created, it gets a prototype object created and attached to it behind the scenes.

If that function is then used as a constructor function with the new keyword, the object that is created has a proto property that is pointing to the same object that is the function's prototype. This is much easier to understand with code, so let's take a look. For example, let's use our Cat function. 

'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}
display(Cat.prototype)  // displays 'Cat{}'

To start with, let's look at its prototype. So you can see here that our function has a prototype.

// displays 'Cat{}'


Now let's create a new cat from that constructor function. And let's look at Fluffy's prototype.

var fluffy = new Cat('Fluffy', 'White')

display(Cat.prototype)  // displays 'Cat{}'
display(fluffy)         // displays 'Cat{}'

You can see that they both have the same shape. However, they're not just the same shape. They're pointing to the exact same instance of an object. Notice that they are the same instance. You can see that they're equal. 

display(Cat.prototype === fluffy.__proto__)

This would only return true if these two objects are actually the very same instance. You can see that further if I change one of them. Let's change the Cat function's prototype.

Cat.prototype.age = 3

And let's print them out again now.

display(Cat.prototype)
display(fluffy.__proto__)

So there you can see that while I only change the prototype for the Cat function, it is also reflected in Fluffy's prototype since they're the same object. The same holds true if I create another instance of cat.

var muffin = new Cat('Muffin', 'Brown')

display(muffin.__proto__)

You can see that both instances of cat are pointing to the same prototype instance. Next, let's take a deeper look at what's actually happening with that age property on our prototype. And then I'll graphically illustrate everything that's happening behind the scenes. After the next couple of clips, I promise this'll all make a lot more sense, and we'll revisit our definitions.

*/