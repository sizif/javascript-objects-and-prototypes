/* global display */
'use strict'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}
// 1
// for (var propertyName in cat) {
//     display(propertyName)
// }

// 2
 Object.defineProperty(cat, 'name', {enumerable: false})

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName])
}

display(Object.keys(cat))

display(JSON.stringify(cat))

display(cat['name'])

/*
2-5-Using the Enumerable Attribute

Okay, now let's take a look at the enumerable attribute. Before we look at that, though, let's take a look at the for…in loop. You can use the for…in loop to loop over each of the properties in any object like this. 

//for...in

for (var propertyName in cat) {
    display(propertyName)
}

Okay, so you can see here that we're looping over each property in the cat object, and each time through the loop, it returns the name of the property and assigns that to our property name variable. And then we're displaying each one of those. Now we can use those property names to get the value of each property using the bracket notation we talked about earlier like this. 

for (var propertyName in cat) {
    display(propertyName + ': ' + cat[propertyName])
}

So now we're displaying both the name of the property and the value of the property using bracket notation. You can see that the name property is set to an object and that the color property is set to white. Now back to the enumerable attribute. By default, properties on an object are enumerable, meaning we can loop over them using a for…in loop. But we can change that. Let's make enumerable false for the name property. 

Object.defineProperty(cat, 'name', {enumerable: false})

There, now notice that even though I'm still looping over all the properties in my cat object that the name property was not actually returned in my loop. That is one of the main use cases for the enumerable property. Setting enumerable to false also makes it so the property does not show up in the object keys. You can look at an object's keys like this.

display(Object.keys(cat))

Now let's just display that. Notice that object.keys returned an array with all the properties except notice that name is not showing up because it's not enumerable. If we make name enumerable again, then you can see that it does show up in the object keys. And, lastly, setting enumerable to false affects JSON serialization of the object. Notice if I serialize my cat object to JSON that I can get the whole object.

display(JSON.stringify(cat))

I'll have to scroll over for you to see all of that. So there you can see our color property and our name property both got output in the JSON. But if I change my name property to not be enumerable again, then you can see that that property is not JSON serialized. So that shows you the power of the enumerable property. Note that you can still look at the property with bracket notation. 

display(cat['name'])

So setting enumerable to false does not change the ability to look at the property. You just can't enumerate it, see it in the object's keys, or serialize it.

*/