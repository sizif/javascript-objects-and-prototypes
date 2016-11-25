/* global display */
'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')

display(fluffy.__proto__)

display(fluffy.__proto__.__proto__)

display(fluffy.__proto__.__proto__.__proto__)



/*
3-7 Multiple levels of inheritance

So far we've only been talking about a single level of inheritance. But, actually, the objects we've already been working with have multiple levels of inheritance already. We know that Fluffy has a prototype and that it was created from our Cat function as we can see here. 

display(fluffy.__proto__)


What we haven't seen is that the Cat prototype also has a prototype. 

display(fluffy.__proto__.__proto__)

Notice that it's prototype was created from the object constructor. So what if we keep looking up the chain? Notice that object's prototype is null.  

display(fluffy.__proto__.__proto__.__proto__)

Eventually as you walk up the prototype chain, you always find a null prototype. And this is usually after hitting object's prototype. By default, all objects in JavaScript inherit from object. And object has no prototype. So almost all objects that we work with have some type of prototypal inheritance chain like this. Next, let's take a look at how we can create our own chains of inheritance using our own objects.


*/