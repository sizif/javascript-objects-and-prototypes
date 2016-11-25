/* global display */
'use strict';

var cat = {
    //name: {first: 'Fluffy', last: 'LaBeouf'
    name: 'Fluffy',
    color: 'White'
}
Object.defineProperty(cat, 'name', {writable: false});
cat.name = 'Scratchy';
// cat.name.first = 'Scratchy'
display(Object.getOwnPropertyDescriptor(cat, 'name'));

/*

2-4 Using the writable attribute

The writable attribute does what you would probably expect--it defines whether the property's value can be changed from its initial value. So let's make the name property non-writable. We can change the property attributes using the Object.defineProperty method like this. 

Object.defineProperty(cat, 'name', {writable: false})

There, now you can see that the name property is not writable. So let's see what happens if we try to change the name of our cat. First, I'll open the error console so you can see any errors. Now let's change the name of our cat. 

cat.name = 'Scratchy'

You can see that I've thrown an error because my property is not writable. Now it's very important to know that this behavior of throwing an error only occurs in strict mode. Notice that if I clear my console errors and then go up and remove 'use strict' that I don't get any errors. That's kind of scary. One of many reasons why it's best to always run in strict mode because, in this case, you would think that you're assigning the value Scratchy to your cat's name, and it would just silently fail and you would have no idea. So it's always best to run in strict mode. So we'll go ahead and put that back. Now let's take a look at what happens if a non-writable property contains an object. So let's make the value of our name an object, and that object will have a first and a last name like this. 

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'
}

So now my name property's set to this object, and I'm trying to set it to Scratchy here still, and it's failing and throwing errors. That's why we're not getting a display. But here's the interesting thing. I actually can change the object that is pointed to by that property like this. 

cat.name.first = 'Scratchy'

Now you can see we're not throwing an error anymore because our display is working. Let's go ahead and display the cat name. So there you can see that even though the name property was read-only, I was able to change the value of a property of the object that the name property was pointing to. This makes sense when you think about it since name is really just a pointer. And when you make it read-only, you're only preventing that pointer from being changed. As a side note, you actually can prevent the object from being changed by using object.freeze like this.

Object.freeze(cat.name)

And now that that's frozen, you can see that I'm getting an error because the entire name object is now read-only in addition to the actual name property. So just keep that in mind if you ever make a property read-only that if the property contains an object, you'll need to freeze the object also in order to prevent it from being changed.

'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'name', {writable: false})
Object.freeze(cat.name)
cat.name.first = 'Scratchy'
display(cat.name)
*/