---
title: "Jest Mock Factories"
date: 2024-04-25
---

One of the best features of the testing framework Jest is its built-in support 
for mocking imports. There is a full suite of helper functions and utilities that 
make it very easy to completely mock an imported file with very little effort.

Jest accomplishes this by rebuilding an entire registry of every module in the 
dependency tree of everything you import into the test file. This happens once 
per test suite/file. This can be pretty expensive and slow if you have a lot of 
test suites or files with a lot of imports.

This module registry is being built for a Jest test suite. Jest can swap in a 
mocked representation of that module. The most common way to do this is 
with a simple line like:

```jsx
jest.mock('module');
```

This automatically mocks this module anywhere it may be imported in the 
dependency tree. Meaning it replaces every function exported from it with a 
`jest.fn()`.

While this is great it doesn’t actually help our slowness. We still need to build 
the whole module with all of its dependencies in order to identify the exported 
interface for the module. If we still have to add all the child dependencies of 
that file to the module registry then we haven’t saved ourselves anything yet.

The way to truly mock this module and prevent us from diving into it is to 
provide a factory function like:

```jsx
jest.mock('module', () => ({
  foo: jest.fn(),
  bar: jest.fn()
}));
```

Providing that factory function will completely replace the module with the 
object you define here, and it won’t have to travel any deeper when building 
the module registry.
