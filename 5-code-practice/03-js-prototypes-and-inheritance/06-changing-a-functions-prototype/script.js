/* global display*/
'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

//Cat.prototype = {age: 5}

display(fluffy.age)
display(muffin.age)
//display(Cat.prototype.age)

/*
3-6 Changing a Function's Prototype

In the definition of a function's prototype, we said the function's prototype is the object instance that will become the prototype for all objects created using this function. Let's take a look at a quick example that illustrates that. Here we have our Cat function and two cats, Fluffy and Muffin, which were derived from that function. If we look at their ages, you can see that they're both inheriting an age of 4 from the Cat function's prototype. We know that if we change the age of the prototype, that that will also change the age of Fluffy and Muffin through inheritance. But what if we actually change the function's prototype to point to a completely different object. Let's try that. 

Cat.prototype = {age: 5}


Notice that that did not change the age of our two cats. And if we look at the Cat function's prototype, 

display(Cat.prototype.age)


we can see that it does have an age of 5. Notice also that if I create a new cat after having changed the function's prototype, 

var snowbell = new Cat('Snowbell', 'White')


notice that Snowbell has an age of 5. 

display(snowbell.age)


So what exactly is going on here? This really highlights that the Fluffy and Muffin objects have prototypes that are pointing to an instance of an object in memory. Let's take a look at what really happened. 

pic3-6-1.png

Here we have our diagram from earlier showing our Cat function and our two instances of cats. And you can see that they are all pointing to the same prototype in memory. When we changed the prototype of our function, 

pic3-6-2.png

what we really did was create a new object in memory and changed the function's prototype property to point at that new object.

pic3-6-3.png

However, the existing Fluffy and Muffin instances of our cat still have prototypes that are pointing to the old prototype object. 

pic3-6-4.png

When we then created our new Snowbell instance of a cat, it created a new object

pic3-6-5.png

and set its prototype to point to the current prototype of the Cat function. 

pic3-6-6.png

This really highlights the fact that prototypes really are objects that live in memory. And as you would expect, they behave like any other objects with regards to pointers.



*/