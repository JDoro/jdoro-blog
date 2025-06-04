---
title: "From Objects to State: A Reactjs Developer's Mindset Shift"
date: 2024-04-13
---

For many developers coming from an Object-Oriented Programming (OOP) background, the transition to Reactjs development can feel like a paradigm shift. In the OOP world, we're conditioned to think in terms of objects – creating them, manipulating their properties, and calling their methods. This naturally translates to a desire to interact with the UI in a similar way: find the DOM element, access its properties, and call methods to modify its behavior.

This approach is perfectly valid in many popular libraries and frameworks like Angularjs or jQuery. They provide a way to directly manipulate the DOM, often mimicking object-oriented interactions. However, React takes a different approach, one that requires a fundamental shift in how we think about building UIs.

**React: The State-First Mentality**

At the heart of Reactjs lies the concept of components. These components are essentially functions that take state as input and return JSX (a syntax extension for describing UI) for React to render. This means our primary focus is on managing the state that drives the UI, not on directly manipulating the DOM.

Think of it this way: imagine a thermostat. In the traditional approach, you'd interact with the thermostat buttons (DOM elements) to adjust the temperature. You might press a button to increase the temperature, and the thermostat would display the new number and activate the heating system.

But with React, you'd focus on the desired temperature (the state) and update that state using the controls (like up/down buttons). React, in turn, would handle the underlying logic of adjusting the actual temperature and updating the display based on the new state.

**Benefits of the State-First Approach**

This state-first mentality offers several advantages:

- **Declarative UI:** We describe what the UI should look like based on the current state, making the code more readable and maintainable.
- **Predictable Updates:** React efficiently re-renders the UI only when the state changes, ensuring a smooth and predictable user experience.
- **Component Reusability:** Components can be easily reused with different props and state, promoting code modularity and reducing redundancy.

**Examples: Rethinking UI Interactions with State**

Let's solidify this concept with some practical examples:

1. **Toggle Button:**
    - OOP Approach (jQuery): We might find the button element using a selector and then attach a click event listener. Inside the listener, we'd toggle a class on the button to change its appearance and potentially manipulate other DOM elements.
    - Reactjs Approach: We create a component with a state variable `isToggled` (initially `false`). When the button is clicked, we update the state to `true` using a function like `setIsToggled(!isToggled)`. The component then renders the button's appearance based on the `isToggled` state.
2. **Product List with Filtering:**
    - OOP Approach: We might have an array of product objects and manipulate the DOM to show or hide products based on a selected filter. This could involve complex DOM manipulation and event handling.
    - Reactjs Approach: We create a component that receives the product data as props and has its own state variable for the selected filter. The component filters the product data based on the state and then renders the list of products. Updating the filter would involve changing the state, triggering a re-render with the updated filtered list.

**Embracing the Change**

While the shift from an object-centric approach to a state-centric one might feel unfamiliar at first, it unlocks a powerful way to build dynamic and maintainable UIs. By focusing on state management and leveraging React's component-based architecture, you can create efficient and scalable user interfaces.

So, the next time you approach a UI development problem in Reactjs, remember: it's all about the state! Think about the data that drives your UI, manage it effectively, and let React handle the underlying DOM manipulations. This state-first approach will lead you to cleaner, more predictable, and ultimately, more enjoyable React development.
