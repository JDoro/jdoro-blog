---
title: "React Best Practices: Immutability"
date: 2024-06-11
draft: false
description: "A guide to understanding and applying immutability in React for better state management."
tags: ["reactjs", "immutability", "state", "best practices"]
categories: ["reactjs"]
---

Immutability is an important concept in React development. Without a solid
understanding of it, you would certainly struggle with state management in your
React applications. In this blog post, we will explore the concept of
immutability, its importance in React, and how to apply it effectively in your
projects.

## What is Immutability?

Immutability is the ability of an objects value to be changed after it;s  
been created. In simpler terms, once an object is created, its value cannot be
changed. If you want to "change" the object you need to create a new object with
the desired changes. Employing immutability in your application helps you
ensure that the data inside an object remain consistent and predictable. If
an object is passed into a function and you mutate it within that function, the
caller of the function can no longer be certain that the object will remain
unchanged. This can lead to bugs that are difficult to track down.
Immutability also allows for comparison optimizations by only checking if the
reference to the object has changed, rather than comparing all the values in the
entire object.

## Why is Immutability Important in React?

React uses this the shallow comparison objects to optimize when the
component should re-render. This is where immutability comes in handy. If
you always create a new object when changing the state then React can easily
determine if there are new changes to render. If you mutate the object directly
then React will not be able to detect the changes and will not re-render. This
will make it difficult to track down bugs and identify when or why portions
of your application are or are not updating when you expect them to.

## How to Apply Immutability in React

There are some datatypes that are really easy to make immutable like strings
or primitives. Objects and arrays are a bit more difficult.

### Objects

When you want to update an object you can use the spread operator (`...`)
to copy all the properties from the old object to the new object and then
overwrite the properties you want to change.

```javascript
const person = {
  name: 'Alice',
  age: 25,
};

// Create a new object with the same properties as person but with age 26
const updatedPerson = {...person, age: 26};

```

If you need to update nested objects you need to continue to use the spread
operator at every level.

```javascript
const person = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

// Create a new object with the same properties as person but with the city
// changed to San Francisco
const updatedPerson = {
  ...person,
  address: {
    ...person.address,
    city: 'San Francisco',
  },
};
```

### Arrays

Since arrays are objects you can use the spread operator to copy the array
when you need to add a new element on one end.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Create a new array with all the elements of numbers and add 6 to the end
const appendNumbers = [...numbers, 6];

// or

const prependNumbers = [0, ...numbers];
```

If you need to add an element in the middle of the array you can use the
`slice` method to create two new arrays and then combine them with the new
element in the middle.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Create a new array with 6 inserted after the second element
const insertNumber = [...numbers.slice(0, 2), 6, ...numbers.slice(2)];
```

if you need to remove an element from an array you can use the `filter` method
to create a new array with the element removed as it creates a new array
instead of mutating the original.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Create a new array with the element 3 removed
const removeNumber = numbers.filter((number) => number !== 3);
```

## Conclusion

Mastering immutability is crucial for writing efficient and predictable
React code. By keeping your data immutable, you can avoid many common bugs
and make your application easier to reason about. Remember to always think
if you are changing a value or replacing a value.

Immutability is not a concept exclusive to react either. give it a try in
your Java or C# or Python code. Other languages may not make it as easy or
clean looking but just thinking about immutability can help you write better
code. Especially when dealing with concurrency.
