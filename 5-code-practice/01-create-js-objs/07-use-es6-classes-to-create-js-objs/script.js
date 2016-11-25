/* global display */
'use strict'

class Cat {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    
    speak () {
        display('Meeooow')
    }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()

/*
For browsers that support it, the ECMAScript 6 specs now provide functionality for creating objects using a class structure that is similar to the class structure you might see in a statically typed language. Again, this is just syntactic sugar on top of existing object creation functionality, but it may feel much more comfortable to you if you're used to this type of structure. So to create our cat using a class, we would do something like this.

class Cat {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    
    speak () {
        display('Meeooow')
    }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()

Okay now you can see that this is very similar to using a constructor function, but it looks a little bit more like a traditional class. We can also add methods to our classes like this. Now I can call that method. 

cat.speak()

There you go. So you can see this looks a little bit more like class in a statically typed language, only it looks a little bit more JavaScript-y. Really behind the scenes, these ES6 classes are just creating objects in the same way as the other methods we've looked at. But it may be a syntax you're more familiar with. You can also extend or inherit from other ES6 classes. But we'll talk more about that in the module on prototypal inheritance.
*/