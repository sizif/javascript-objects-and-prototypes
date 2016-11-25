/* global display */
'use strict'

var cat = {
    name: 'Fluffy',
    color: 'White'
}

// display(cat.color)
cat['Eye Color'] = 'Green'
display(cat['color'])
display(cat['Eye Color'])

/*
02-02 Using Bracket Notation
to Access JavaScript Properties

In the next couple of examples, you'll see me using the bracket notation for properties. This can be very useful in a few cases. And here's how you use it. First, notice that we can look at the cat's color property as we have been with dot notation like this.

display(cat.color)


But we can also use bracket notation like this. Notice those produce identical results. 

display(cat['color'])

So why would you ever use bracket notation? Well, what if you for some reason needed to create a property on an object using a property name that is not a valid identifier? For example, let's create a property on our cat called Eye Color. We'd do that like this. 

cat['Eye Color'] = 'Green'

Now let's take a look at that value. 

display(cat['Eye Color'])

You may still be wondering why you might ever do this. Well, what if you wanted to create an object out of values being entered by a user? Or it's possible you have a source of JSON data that has property names that are not valid identifiers. It's not too common that you run into this, and it's best to use valid identifiers for your property names for simplicity, but it is nice in the rare cases that you need it.



*/