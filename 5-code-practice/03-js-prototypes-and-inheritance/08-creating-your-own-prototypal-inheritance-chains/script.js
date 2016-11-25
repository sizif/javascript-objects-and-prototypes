/* global display */ 
'use strict';

function Animal(voice) {
    this.voice = voice || 'grunt'
}
Animal.prototype.speak = function() {
    display(this.voice)
}

function Cat(name, color) {
    Animal.call(this, 'Meow')
    this.name = name
    this.color = color
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
var fluffy = new Cat('Fluffy', 'White')

fluffy.speak()

display(fluffy.__proto__.__proto__)

/*
Now let's take a look at creating our own prototypal inheritance chains.

'use strict'

function Cat(name, color) {
    this.name = name
    this.color = color
}

var fluffy = new Cat('Fluffy', 'White')


What if we wanted our cat to inherit properties from a parent called Animal? Let's take a look at how we'd do that. Let's make it so that all animals have a speak function. 


function Animal() {
}
Animal.prototype.speak = function() {
    display('Grunt')
}

Now any function that uses Animal as its prototype will get the speak function automatically. So now we need to assign Animal as the prototype for the Cat function. We simply do that like this. 

Cat.prototype = Objet.create(Animal.prototype)

So now we can make Fluffy speak. 

var fluffy = new Cat('Fluffy', 'White')

fluffy.speak()

And you can see here that Fluffy grunted. The speak function is not a member of cat, so hasOwnProperty would return false. But it is a member of its prototype Animal. Now you might be wondering why we use object.create here instead of just using new. The big difference is that object.create is not going to call the Animal function. It's just going to set that function as the prototype and set up the prototype chain. If we called new, it would actually execute the Animal function. And we probably don't want to do that just while we're setting up our Cat function. We don't really want to call that until we're creating instances of cats. So that leads us to the next thing we need to do. We do need to call our Animal constructor from our Cat constructor. This way if anything needs to happen to initialize an Animal upon construction, it will be taken care of. We just do that like this. So that will call the Animal function passing in the cat being constructed. So any Animal-related initialization can occur. 

Animal.call(this)


Let's just add something to demonstrate that. Let's make it so that our cat can meow instead of just grunting. To do that, let's have our Animal constructor take in a voice. 

function Animal(voice) {
    this.voice = voice || 'grunt'
}


And we'll update our speak function to use the Animal's voice. Now we can optionally pass in a voice. Let's do that from our Cat constructor. 

Animal.call(this, 'Meow')


Now you can see that when we call the speak function, our cat will meow instead of grunt. There're a couple more things that we need to do in order to tie up some loose ends here. First of all, notice if we display Fluffy, notice it says that Fluffy was constructed from Animal. 

display(fluffy)


But Fluffy was actually constructed from Cat. First of all, let's understand where this is actually coming from. This actually is just something I'm doing in my display function. If we look at display.js, you can see right here that I'm displaying the type name of an object when we display an object. But there really isn't such a thing as a type name in JavaScript. So if you look at this type name function, what we're really doing is looking at the object's constructor function and parsing the function name out of that function definition. So we have the wrong constructor associated with Fluffy. It is worth noting that Fluffy actually is a cat according to JavaScript. We can see that with the instance of operator. 

display(fluffy instanceof Cat) // returns true

So you can see that returned true. Fluffy is also an Animal. That returns true also.

display(fluffy instanceof Animal)


But the constructor is still wrong. This is because when we define the prototype for our cat here, 

Cat.prototype = Object.create(Animal.prototype)


it also set the constructor function of our cat to be Animal. We want our constructor to be the Cat function. So we can do that like this. 

Cat.prototype.constructor = Cat


So now if we display Fluffy,

display(fluffy)


we can see that Fluffy is a cat again. And we can see that Fluffy's prototype is a cat

display(fluffy.__proto__)


and that Fluffy's prototype's prototype is an Animal. 

display(fluffy.__proto__.__proto__)


It seems like we've covered a lot of steps here. But, really, there are just three lines that you need to worry about when creating the prototype chain, and that is these three lines here.

...
Animal.call(this, 'Meow')
...
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

You just need to implement these three concepts whenever building a prototype chain. And that's all there is to it.

*/