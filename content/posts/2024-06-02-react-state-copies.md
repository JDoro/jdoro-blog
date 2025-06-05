---
title: "React Best Practices: There can only be one… copy of the state"
date: 2024-06-02
draft: false
description: "Why you should avoid multiple copies of state in React and how to derive data properly."
tags: ["reactjs", "state", "best practices", "javascript"]
categories: ["reactjs"]
---

In React, state is what makes our components dynamic and responsive. It allows
us to hold onto data that can change over time, triggering UI updates when
needed. However, a common pitfall new React developers encounter is creating
multiple copies of the same state when they need to transform the data slightly
or derive new values from the data.

**Imagine you're building a product listing page.** You have a state variable
holding an array of products, each with a `price` property. You want to display
both the original price and a discounted price (say, 20% off).

An initial solution might be to create a copy of the product array within the
component, iterate through it, and calculate the discounted price for each
product. This seems reasonable at first, but as your application grows and you
test more edge cases, you might encounter issues.

Here's an example of this initial approach:

```jsx

function ProductList({products}) {
  const [discountedProducts, setDiscountedProducts] = useState([]); // Create a copy

  useEffect(() => {
    const newDiscountedProducts = products.map((product) => ({
      ...product, // Spread operator to copy product details
      discountedPrice: product.price * 0.8,
    }));
    setDiscountedProducts(newDiscountedProducts);
  }, [products]); // Update copy whenever products change

  return (
      <ul>
        {discountedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - Price: ${product.price} (Discounted:
              ${product.discountedPrice})
            </li>
        ))}
      </ul>
  );
}

```

In this code:

1. We create a new state variable `discountedProducts` to hold the copied array
   with discounted prices.
2. We use `useEffect` to listen for changes in the original `products` state.
3. Inside `useEffect`, we iterate through the original products, calculate the
   discounted price for each, and create a new array with these modified
   objects.
4. Finally, we update the `discountedProducts` state with the newly created
   array.

This approach works, but as mentioned earlier, it can lead to inconsistencies if
the original state is modified elsewhere without updating the copy.

There are better ways to handle data transformations without the overhead of
managing multiple state copies. Here's how to approach it:

## Simple Transformations in Variables:

If the transformation you need to perform on your state is straightforward,
there's no need to create a separate copy. Instead, consider using a simple
variable within the component itself. This keeps the code clean and easy to
follow, and in most cases, it has minimal impact on performance.

```jsx

function ProductCard({product}) {
  const discountedPrice = product.price * 0.8; // Simple transformation in a variable

  return (
      <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Discounted Price: ${discountedPrice}</p>
      </div>
  );
}


```

In this example, we calculate the discounted price within the component using a
variable. This avoids the need for a separate state copy and keeps the logic
clear.

## Complex Transformations with `useMemo`:

For more complex transformations, React offers the `useMemo` hook. This hook
lets you memoize the result of a function based on its inputs. Memoization
essentially means storing the function's output for a specific set of input
values. If the function is called again with the same inputs, the stored result
is returned instead of re-running the function.

`useMemo` can be incredibly helpful for optimizing performance in React
applications, especially when dealing with
complex data transformations.

```jsx

import {useMemo} from 'react';

function ProductList({products}) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.inStock);
  }, [products]); // Dependency array ensures recalculation only when products change

  return (
      <ul>
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
      </ul>
  );
}

```

Here, we're using `useMemo` to filter the product list based on the `inStock`
property. As long as the `products` array
itself doesn't change, `useMemo` will ensure the filtered list is only
recalculated when necessary. This can
significantly improve performance, especially when dealing with large datasets.

## Important Considerations:

While `useMemo` is a powerful tool, it's important to remember that it can also
add some memory overhead. Using it
excessively or with large, complex functions might not be the best approach.
Always consider the trade-off between
performance optimization and memory usage.

## Conclusion:

By avoiding unnecessary state copies and utilizing variables for simple
transformations, and leveraging `useMemo` for
complex scenarios, you can keep your React state management clean and efficient.
These practices will lead to more
maintainable and performant applications as your React projects grow in
complexity.
