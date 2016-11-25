/* global display */
'use strict';

function Cat() {
    this.name = 'Fluffy'
    this.color = 'White'
}

var cat = new Cat();

display(cat)

/*

Okay, so what if we actually want to create something that allows us to create multiple instances of cats, all with the same object structure, like a class in a statically typed language? JavaScript doesn't really have classes in the same sense as a static language. The new ECMAScript 6 spec does have a class-like syntax, but they're still not classes like you have in a static language. They do allow you, however, to accomplish the same thing in JavaScript without losing the dynamic nature of objects. This is made easier due to the new keyword. The new keyword is followed by a function that you create to initialize the object, like this. 

var cat = new Cat();

So let's create that function now. Notice that this is just a simple function. There's nothing special about that function.

function Cat() {
    this.name = 'Fluffy'
    this.color = 'White'
}

Notice that it is just creating properties on the object represented by this and sets the value of those properties. More on that in a second. First, let's just take a look at our new Cat object. 

display(cat)

There you can see that our lowercase cat variable is now a pointer to a Cat object, and that cat is named Fluffy and is white. So how exactly did that work? To really understand what is happening here, it's important that you understand what the keyword this is in JavaScript. The this keyword refers to an object. That object is whatever object is executing the current bit of code. By default, that is the global object. In a web browser, that is the window object. So when we executed this Cat function, what was 'this' referring to? It was referring to a new empty object. That's what the new keyword does for us. It creates a new empty JavaScript object, sets the context of this to that new object, and then calls the Cat function. Just to demonstrate that a little further, let's call that Cat function directly without the new keyword. Before we do that, I'm going to comment out this line, and I'll explain why in just a second. Now let's get rid of the new keyword, and we're going to have to get rid of use strict up here in order to demonstrate this. 

// global display

function Cat() {
    //this.name = 'Fluffy'
    this.color = 'White'
}

var cat = new Cat();

display(cat)

Now notice when we display our cat, it displays undefined. That's because we set cat equal to the return value of our Cat function, but our Cat function doesn't return anything. Previously, it was the new keyword that was returning our new object. But you can see that we called our Cat function, and the Cat function set the color to white on something. What did it do that to? Remember that without the new keyword setting the context of this, this is going to refer to the window object. So let's take a look at window.color. 

display(window.color) // script.1.js

There it is. So you can see that this Cat function really isn't anything special. It's just a function. And it's going to set the values on whatever object is represented by this. If we put the new keyword back, we'll get our cat back. So why did I comment out this name? That's because changing the name property of a window messes with the browser. So without the new keyword, it would've changed the name of the window and freaked out Plunker. We can put that back now, and let's put our use strict back. So our Cat function's back to normal now. One last thing, however. We don't want every cat to be a white cat named Fluffy. So let's pass those values in. Now we have a function that we can use to create any type of cat. 

// global display
'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}

var cat = new Cat('Fluffy', 'White');

display(cat)


So let's pass in our name and color. There we go. So these functions, like this Cat function, are commonly called constructor functions. But you can see that there's really nothing special about them. They're just functions. But this is a very common pattern for creating objects in JavaScript.


*/