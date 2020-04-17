# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a popular JavaScript UI library, developed by Facebook, that helps developers build large-scale applications effectively. React JS is based on encapsulated components that manage their own state, allowing developers to make complex UIs without repeatedly copying/pasting the same code. React JS also allows developers to interface with other libraries and frameworks easily. 

1. Describe component state.

Component state is all the data that is contained in a React component, whether it's brought in from outside the component via props or was created/manipulated inside of it. An example of component state is a component that represents whether a light bulb is on or off as well as the color that is emitted when it's on.

1. Describe props.

Props (a.k.a. properties) is an object and is the mechanism developers use to pass information held on state inside one component to another component. Props are read-only, so developers should never make changes to them. This ensures data flow remains clean and organized.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are any changes made outside the scope of the function being executed. Examples of side effects are fetching data from an API, timers, logging, and manually manipulating the DOM. There are two types of side effects in React components - those that require cleanup and those that don't. A component without side effects is called a pure component. A developer can sync side effects in a React component by passing a dependency array of props or components as the second argument to the effect hook. The dependency array is optional. 
