/* global display */
'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}


Object.defineProperty(cat, 'fullName',
    {
        get: function() {
            return this.name.first + ' ' + this.name.last
        },
        set: function(value) {
            var nameParts = value.split(' ')
            this.name.first = nameParts[0]
            this.name.last = nameParts[1]
        }
    });

display(cat.fullName)

cat.fullName = 'Muffin Top'
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)

/*
2.7-Using getters and setters

Getters and Setters are a couple of pretty cool attributes on a property that allow you to specify the return value of a property using a function and set the value of a property using a function. But you can access the property just like you would any other property. Let's take a look at how you might do that. Our cat has a name property, and that name property has an object with a first and last name. What if we want to know the full name of the cat? Let's use a property getter to create a full name property that does that. To create getters and setters, you have to use defineProperty like this.  

Object.defineProperty(cat, 'fullName',
    {
        get: function() {
            return this.name.first + ' ' + this.name.last
        }
    });

Now we have a full name property that will return the first and last name appended. Let's take a look at the full name of our cat now. 

display(cat.fullName)

Now you can see that it's displaying the full name of our cat, and we were able to access it just like we would any other property even though it's actually executing a function behind the scenes. That's pretty cool. Now what if we wanted to be able to set the first and last name based off of setting the full name? Well, let's add a setter for that. 

        set: function(value) {
            var nameParts = value.split(' ')
            this.name.first = nameParts[0]
            this.name.last = nameParts[1]
        }
        
Now we can set the cat's first and last name like this.

cat.fullName = 'Muffin Top'

And you can see that the full name is now Muffin Top. But not only that, if we take a look at the first and last names, you can see that those are also correctly set.

display(cat.name.first)
display(cat.name.last)

So here we're setting the full name as if its a property, and yet behind the scenes, it's executing a function and doing a lot more than that. So you can see that you can do some pretty cool stuff with JavaScript objects. And there really is a lot more to JavaScript properties than initially meets the eye.

*/