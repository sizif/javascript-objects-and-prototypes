/* global display */
'use strict';

var cat = {name: 'Fluffy', color: 'white'}

cat.age = 3

cat.speak = function() { display("Meeooow") }

display(cat.name)
display(cat.age)

cat.speak()

/*
couldve added speak fn as part
of my obj literal like this:

var cat = {
    name: 'Fluffy', 
    color: 'white'
    speak: function() { display("Meeooow") }
}

That works just the same,
the speak function can still 
be called.

*/