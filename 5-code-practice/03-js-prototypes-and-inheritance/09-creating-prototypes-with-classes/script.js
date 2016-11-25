/* global display */
'use strict';

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }
  
  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}

var fluffy = new Cat('Fluffy', 'White')
display(fluffy)
display(Object.keys(fluffy.__proto__.__proto__))
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))



/*
3-9 Creating prototypes with classes

If you prefer a more class-like structure to your code, you can build the same types of prototypal inheritance chain using a class-like syntax. Whether you use traditional constructor functions or classes, the end result is very similar. Everything you do with classes is mostly just syntactic sugar on top of everything you've learned about prototypes with some small differences. Let's take a look at how you'd accomplish the same thing using classes. It actually is a little cleaner. So, first, we'll create a class called Animal, and it'll have a constructor like this. 

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }
}


So here's our Animal class, and you can see it has a constructor that takes in a voice and defaults its voice to grunt if no voice is passed in. And that replaces this code here. And then we'll add a speak method to our class. And that replaces this code here. Now let's create our Cat class, and it will extend from our Animal class like this.

class Cat extends Animal{
  constructor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}


So that extends keyword is new, and so is super. Extend is what you use to set up your inheritance chain. And you can see that Cat still has a constructor function that sets the name and color, but you can see that it also calls its parent's class's constructor using the super keyword. So that will call Animal's constructor prior to setting the name and color of the cat. So that all replaces this code here. 

functino Cat(name, color) {
  Animal.call(this 'Meow')
  this.name = name
  this.color = color
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

So now we have our cat that inherits from Animal. And we've created a new instance of our cat here. So let's see if Fluffy can speak. You can see that because Fluffy is a cat, when we called Speak, it displayed Meow. And if we look at Fluffy, you can see that Fluffy still has a voice, name, and color. There are a couple of minor differences that, really, you won't typically care about, but they are worth noting. Notice that my display function when we're displaying Fluffy is failing to indicate the type here. Remember, using the constructor function, this said Cat before. If we go look at my display function, that's just because the regex that I'm using in this function here is not an appropriate regex for classes. Notice here that I'm looking for something named function in the constructor. Here you can see that I'm looking up the constructor, and I'm using this regex to try to parse what the name of the function is. But in the case of classes, the constructor is not a function, it's a class. So if we look at fluffy.constructor, you can see it does still have the constructor, that that constructor is a class, whereas before it was a function. 

display(fluffy.constructor)

So that's really the only difference there is that the constructor is a class. And then there is one other difference to take note of when using the class syntax. Members of classes are not enumerable by default. So this speak function is not an enumerable property of the Animal class.

speak() {
  display(this.voice)
}


That means if we look at the object.keys for Fluffy's Animal ancestor, notice that that is empty, even though if we look at hasOwnProperty for that speak function, that returns true. So while there is a speak function on Fluffy's Animal prototype, it is not enumerable, and so you don't see it in the object.keys, and you won't see it if you try to loop over the properties of the Animal class. So that is another minor difference between this and the constructor syntax. You won't typically run into these differences, however, so don't worry too much about them. But it is a difference. Other than these two minor and relatively unimportant differences, the class syntax works the same as constructor functions. Everything that you've learned about prototypes still applies to objects created using classes.



*/

-