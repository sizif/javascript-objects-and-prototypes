/* global display */
'use strict'

var arr = ['red', 'blue', 'green']

var last = arr[arr.length-1]
Object.defineProperty(arr, 'last', {get: function() {
    return this[this.length-1]
}})
// var last = arr.last
display(last)

/*
3-2 Getting started with JS prototypes

To get started with prototypes, let's use a simple and common example of when you might want to use a prototype. Let's create a simple array like this. 

var arr = ['red', 'blue', 'green']

Now imagine if we wanted to get the last element of the array. Typically you'd do that like this. 

var last = arr[arr.length-1]

And you can see that retrieve the last argument if we display that. There we go. 

display(last)

But what if you wanted to simplify that by extending the array object so that you could just ask for the last element in the array like this?

var last = arr.last

JavaScript arrays don't have a last property, so this won't work. But, of course, JavaScript is dynamic, so we can add our own last property. I'll do that with defineProperty so we can call it like a property instead of a method. 

Object.defineProperty(arr, 'last', {get: function() {
    return this[this.length-1]
}})

Now you can see that array.last works. 

//2
var arr = ['red', 'blue', 'green']

var last = arr[arr.length-1]
Object.defineProperty(arr, 'last', {get: function() {
    return this[this.length-1]
}})
// var last = arr.last
display(last)


And we're displaying green over here, which is the last element in our array. But we have a problem. Notice when I create a new array, 

var arr2 = ['one', 'two', 'three']

this array does not have a last property. So if I try to access it, 

display(arr2.last)

you can see that it's undefined. What we need to do is put this on the array object's prototype. We can do that changing 'arr' to Array.prototype. 

Object.defineProperty(Array.prototype, 'last', {get: function() {
    return this[this.length-1]
}})

Now if we go down here and display our first array again also, then you can see that both of our arrays have a last property because they're both getting displayed here now.

'use strict'
var arr = ['red', 'blue', 'green']

Object.defineProperty(Array.prototype, 'last', {get: function() {
        return this[this.length-1]  
    }
})
var last = arr.last
var arr2 = ['one','two','three']
display(arr.last)
display(arr2.last)


So what is this array object? If we display it, you can see that it's just a function. 

display(Array)

It's a function that's meant to be used as a constructor function. This array syntax here 

var arr = ['red', 'blue', 'green']

is really just shorthand for calling the array constructor with new like this:

var arr = new Array('red', 'blue', 'green')

You can see that works just the same. So what is Array.prototype? Let's take a closer look at what prototypes are.

*/
