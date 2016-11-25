/* global display */
'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffic = new Cat('Muffin', 'Brown')

display(fluffy.age)
display(fluffy.__proto__.age)

display(Object.keys(fluffy))

display(fluffy.hasOwnProperty('age'))

display(fluffy.hasOwnProperty('color'))  // 'true'

/*
3.4 - Instance vs. Prototype Properties

Okay, so we've seen how adding a property to a function's prototype affects all objects constructed using that function. But let's take a closer look at what exactly is happening behind the scenes. Specifically, let's look at exactly where those properties live. Here we have our Cat function, and two cats derived from that function. And notice that the Cat function's prototype has an age property that is set to 3. That means that each of our cats have an age of 3. 

'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}
Cat.prototype.age = 3

var fluffy = new Cat('Fluffy', 'White')
var muffic = new Cat('Muffin', 'Brown')


And we know if I change Cat.prototype.age, that will change the age for all cats derived from this function. 

Cat.prototype.age = 4


But what happens if instead of changing the prototype's age, I change the age of just one of the cats? 

fluffy.age = 5


Although it makes sense looking at the code, it's interesting that in this case, only Fluffy's age was changed. 

So what exactly is going on here? If the age property is coming from the prototype, how is it that I can change one without changing the other? Well, it's because we didn't actually change the prototype's age property. What we really did here was add a new property to the Fluffy object. Notice that Fluffy still has access to both values. So you can see that Fluffy has an age of 5, but Fluffy's prototype has an age of 4. 

display(fluffy.age)  // displays 5
display(fluffy.__proto__.age) // displays 4


The key concept to notice here is that prior to setting Fluffy's age directly, the Fluffy object never really had an age property. 

Only its prototype did. But if that's the case, why is it that if I get rid of this age property on Fluffy, we can still ask for the age property on Fluffy and get a value back?

'use strict';

function Cat(name, color) {
    this.name = name
    this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffic = new Cat('Muffin', 'Brown')

display(fluffy.age)
display(fluffy.__proto__.age)


Notice here that I'm accessing fluffy.age, and it's displaying 4 even though Fluffy doesn't actually have an age property. We can further see that Fluffy doesn't have an age property by displaying its keys. 

display(Object.keys(fluffy))


You can see here that it only has a name and a color property. This is because what JavaScript is really doing when we ask for the property value is it looks at an object to see if it has a value for that property name. And if not, then it asks its prototype. We can see this further by using the hasOwnProperty method like this. 

display(fluffy.hasOwnProperty('age'))  // 'false'


You can see here that JavaScript says that Fluffy does not have its own age property even though we can ask it for an age property and get a value back. Notice if I change this to color that it returns true because Fluffy does have a color property. 

display(fluffy.hasOwnProperty('color'))  // 'true'


So if we change this back to age, and then I go and actually give Fluffy an age, then you can see that it returns 5 for the age, and JavaScript indicates that Fluffy does have its own age property. 

fluffy.age = 5


So that's important to understand that if you ask an object for the value of one of its properties, just because it gives you an answer doesn't mean that the object itself has that property. It may be one of the prototypes in its prototype chain that is actually returning that value. And by the way, keep in mind also that everything we've talked about with properties, including the way things are inherited, is true of functions on an object also because functions really are just another property. So if my Cat prototype had a speak function, it would behave in exactly the same way that the age property does with regards to prototypes and inheritance.


*/