/* global display */
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
}

// display(cat)
display(Object.getOwnPropertyDescriptor(cat, 'name'))
/*

2-3-Using JS property descriptors

Now let's take a closer look at properties. You may be surprised to learn that a property is more than just a name and a value. Every property has a property descriptor that we can use to see the attributes of that property. To demonstrate this, notice that I changed my cat object back to a simple object literal for simplicity's sake. 


var cat = {
    name: 'Fluffy',
    color: 'White'
}

display(cat)

So let's take a look at the property descriptor for the name property of our cat object. We can do that like this. 

display(Object.getOwnPropertyDescriptor(cat, 'name'))

So we're printing out the property descriptor for our name property. And you can see that in addition to the name property having a value, it also has writable, enumerable, and configurable attributes. And these are all set to true by default. In the next view clips, we'll take a look at each of these attributes and what they're used for and how you can change them.

*/