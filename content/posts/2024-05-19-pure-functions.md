---
title: "Pure Functions Defined"
date: 2024-05-19
draft: false
description: "A deep dive into pure functions, idempotence, and side effects in programming."
tags: ["pure functions", "idempotence", "side effects", "javascript"]
categories: ["software design"]
---


In the realm of programming, functions are the workhorses. They take input, 
perform an operation, and return an output. But within this seemingly simple 
concept lies a spectrum of function types, each with its own strengths and 
quirks. Today, we'll be diving into the world of **pure functions**, 
understanding their core principles of **idempotence** and the absence of 
**side effects**.

## Pure and Simple: The Essence of a Pure Function

A pure function is like a mathematical equation: predictable and reliable. It 
adheres to two key tenets:

1. **Idempotence:** Given the same set of inputs, a pure function will always 
return the same output, no matter how many times you call it. This makes pure 
functions inherently repeatable and reliable.

2. **No Side Effects:**  A pure function focuses solely on its input and output, 
leaving the surrounding environment unchanged. It doesn't modify global 
variables, write to files, or interact with external systems.  This isolation 
keeps the function's behavior consistent and predictable.

Think of it like a recipe. A pure function, like a well-written recipe, takes 
the same ingredients (inputs) and always yields the same delicious dish (output) 
every single time. There's no sneaky business of adding a pinch of extra salt 
here or there depending on the mood – the function sticks to the script!

## Examples of Pure Bliss

Let's illustrate pure functions with some code snippets. Here's a function that 
calculates the area of a circle:

```javascript
function areaOfCircle(radius) {
  const pi = 3.14159;  // Constant value
  return pi * radius * radius;
}
```

This function is pure. It takes a radius as input, uses a constant value of pi, 
and returns the area. The same radius will always result in the same area, and 
the function doesn't modify anything outside of its scope.

## Not-So-Pure Examples: A Look at Impure Functions

Now, let's see an impure function:

```javascript
let globalCount = 0;

function incrementCount() {
  globalCount += 1;
  return globalCount;
}
```

This function relies on a global variable `globalCount` to keep track of the 
number of times it's been called. This introduces an external dependency and 
makes the function's output unpredictable – it depends on how many times the 
function has been called before.  This is a side effect, and it makes the 
function less reliable and harder to reason about.

## Why Pure Functions Rule

Pure functions offer a multitude of benefits:

- **Predictability:** You always know what to expect from a pure function.
- **Testability:** Pure functions are easier to test in isolation since their 
output solely depends on the input.
- **Concurrency:** Pure functions can be safely executed concurrently without 
worrying about data races (conflicts when multiple threads access the same data).
- **Composability:** Pure functions can be easily combined to create more complex 
logic, leading to cleaner and more modular code.

## Embrace the Purity

By understanding and leveraging pure functions, you can write cleaner, more 
reliable, and easier-to-maintain code.  So next time you're crafting a function, 
consider the path of purity – it might just lead you to programming bliss!
