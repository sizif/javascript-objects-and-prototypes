/* global display */
'use strict'

var cat = {
    name: {fist: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {configurable:false})
// Object.defineProperty(cat, 'name', {enumerable: false}) // console: cannot redefine property: name
// Object.defineProperty(cat, 'name', {enumerable: true})
// Object.defineProperty(cat, 'name', {writable: false})

display(cat)

delete cat.name


/*
2-6- Using the configurable attribute

The configurable property locks down a property to prevent certain attributes from being changed. It also prevents the property from being deleted from the object. Let's take a look at that. Say we want to lock down the cat's name property so that its attributes can't be changed. We'd do that like this.

Object.defineProperty(cat, 'name', {configurable:false})

Now notice that if I try to change the property's enumerable property that I get an error. I'll open the error console first so that we can see the errors. 

Object.defineProperty(cat, 'name', {enumerable: false})

There, so you can see that I get an error if I try to change the enumerable property indicating that I cannot redefine the property. It is interesting that once you have made a property non-configurable, you can't make it configurable again. Notice if I try to change this that I get a second error.

Object.defineProperty(cat, 'name', {enumerable: true})

You can see that with the #2 here. So this threw another error. You can, however, still change the writable attribute. 

Object.defineProperty(cat, 'name', {writable: false})

You can see that did not throw another error. There is one more thing that changing the configurable property does. It makes it so that you can't delete a property. So notice that if I try to delete the name property, that I get this error Cannot delete property name of object. 

delete cat.name

And if I get rid of this so that the property is still configurable, you can see I don't get an error. And if I display cat.name, it's undefined because I've deleted that property. 


var cat = {
    name: {fist: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

display(cat)

display(cat.name)


So to recap, there are three things that are affected by making a property nonconfigurable. If configurable is false for a property, you cannot change the enumerable attribute, you cannot change the configurable attribute, and you cannot delete the property. You can, however, change the property's writable attribute. cool

*/