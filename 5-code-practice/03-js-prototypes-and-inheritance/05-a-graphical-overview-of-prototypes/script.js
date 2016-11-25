display("Hello World")

/*
3.5 - A Graphical Overview of Prototypes

So let's take a look at this in another way to help understand exactly what's happening here. First of all, when we first created our Cat function, JavaScript also created another object in memory. This is essentially an empty object at this point although it does have a proto property that we'll talk about later. But for now, consider this just an empty object. 

pic1.png

After creating this object, JavaScript updates the function's prototype property to point to this new object. 

pic2.png

And we can manipulate the function's prototype object like this. When we add the age to the Cat's prototype, it adds that property to this object. 

pic3.png
pic4.png 

Remember, we haven't even created a Cat object from our function yet. This object is just the hidden prototype object that JavaScript created behind the scenes. So let's create a new Cat object from our function now. We do that like this. 

pic5.png

When we do that, the new keyword takes care of creating a new object. But the new function also does something else behind the scenes.

pic6.png

It adds a proto property to our new object. And that property is a pointer to our Cat function's prototype. 

pic7.png

Then the new keyword executes our Cat function, and the this keyword in this context is pointing to our new Fluffy object. 

pic8.png
pic9.png

So it adds the name and color properties to our new object. 

pic10.png

And if we create another instance of a cat, the same process is followed. A new object is created. Its proto property is pointed to the function's prototype, and the instance properties are added. 

pic11.png

Notice that at this point, the Fluffy object itself does not have an age property, only its prototype does. So if we ask for Fluffy's age at this point, what's going to happen? Let's take a look. So I'm going to request Fluffy's age in the code like this. 

pic12.png

When I do that, JavaScript will check the Fluffy object to see if it has an age property.

pic13.png

Since it does not have an age property, then it will check its prototype parent to see if it has an age property, 

pic14.png

at which point it discovers that it does, and it returns a value of 3. So this console log would log 3.

pic15.png

So now what happens if we add an age property to Fluffy? We simply do that by assigning it a value like this. 

pic16.png

That adds an age property to our Fluffy instance here. 

pic17.png

Now if we ask for Fluffy's age, it will check to see if Fluffy has an age, and it does, so it returns the value of 5 without ever checking to see if the prototype has an age property.

pic18.png

So the instance properties override the prototype properties. And this console log statement ends up writing out the value of 5. 

pic19.png

So what would happen if we updated the Cat function's prototype's age property? We could do that in two ways, either directly like this, 

pic20.png

or we could do it through Fluffy's proto property like this. 

pic21.png

As our code stands now, this would have the exact same effect. It is possible, however, for these two statements to return different values. We'll talk more about that later on. For now, let's just stick with the more direct approach. When this line of code executes, it will change the age property of our function's prototype here. 

pic22.png

Now what would we get if we ask for Fluffy's age? We would still get 5 because the instance property overrides the prototype property.

pic23.png

But what if we ask for Muffin's age? We would get 4 because Muffin has no instance property for age. 

pic24.png

So with all this in mind, let's just revisit the definitions we created earlier. A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor, whereas an object's prototype is the object instance from which the object is inherited. Hopefully, these definitions make a little more sense now. Prototypes are really not that complex once you understand what's happening behind the scenes.


*/