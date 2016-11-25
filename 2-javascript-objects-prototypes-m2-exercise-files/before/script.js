// 'use strict';
/* global display */

function Cat() {
    this.name = 'Fluffy'
    this.color = 'White'
}

var cat = new Cat();

display(cat);
display(Object.getOwnPropertyDescriptor(cat, 'name'));

/*
So when we executed this Cat function, what was 'this' referring to?
It was referring to a new empty object. 
That's what the new keyword does for us.
                ---

It creates a new empty JavaScript object, sets the context of this
to that new object, and then calls the Cat function.

To explain this further, we're gonna have to get rid of the new 
keyword and comment out the 'use strict':
*/

var cat = Cat();

display(cat); // displays undefined

/*
It displays undefined because we assign cat to the return
value of our Cat function, but our Cat function doesn't return 
anything. Previously it was the new keyword that was returning
our new object. 

But you can see that we called our Cat function, and the Cat 
function set the color to white on something.

What did it do that to? Remember that without the new keyword
setting the context of this, this is going to refer to the window
object. So let's take a look at window.color.

There it is. So you can see that this Cat function really isn't
anything special.

It's just a function, and it's going to set the values on
whatever object is represented by this.

If we put the new keyword back, we'll get our cat back.

So why did I comment out this name? That's because changing
the name property of the window messes with the browser.

So without the new keyword, it would've changed the name of the
window and freaked out Plunker.

One thing however:

WE DON'T WANT EVERY CAT TO BE A WHITE CAT NAMED FLUFFY.
SO LET'S PASS THOSE VALUES IN:

function Cat(name, color) {
    this.name = name,
    this.color = color
}

var cat = new Cat();

display(cat);
// the above call to display() with the cat objInst passed in,
// without passing in the params to the Cat() constructor, 
// will return this:

Cat {
    name: undefined
    color: undefined
}

If you want the Cat to get passed Fluffy, white, just do this:

var cat = new Cat('Fluffy', 'White');

These types of functions are commonly called constructor functions.
But there's really nothing special about them. They're just
functions. But this is a very common pattern for creating
objects in JavaScript.

*/