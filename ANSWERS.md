# Self-Study Questions

1. What is the DOM?

The *D*ocument *O*bject *M*odel is the active representation of a webpage in the browser. It can be represented by a logical tree, with each node being an object in memory. It acts as an API that we can use programming languages (such as JavaScript) to access and modify elements on the page.

2. What is an event?

An event is a specific interface in the DOM, that can be triggered by certain actions. An element in the DOM can be set to 'listen' for these events, and execute a response. 

3. What is an event listener?

An event listener is the interface that accepts an action of a certain type ('click', 'mouseover', etc) and triggers a function.

4. Why would we convert a NodeList into an Array?

While similar, `NodeList` does not implement all of the same methods that are available to the `Array` prototype. A `NodeList` can be converted to an `Array` using `Array.from()`.

5. What is a component?

A component is a loose term for a collection of encapsulated HTML, CSS, and/or JS that accomplish a singular function and, because of their encapsulated nature, are modular enough to be reused in multiple places or across different projects.