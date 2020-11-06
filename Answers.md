1. What problem does the context API help solve?
`Managing large states that go to many different components and subcomponents where prop drilling can be cumbersome and a store is unnessecary as the states are specific to a certain part of the overall app`
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`actions are shared functions, reducers take in a function and data and return just data and the store is state management shared across the whole app through connect. the store is known as a single source of truth because it is referenced globally through the whole app in the one place. `
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
`Application state is state that is determined at the app level and can be shared down. Component state is where a component manages its own state. Component state is better than application state if only the one component is going to use that state. If the state will be shared across components, some sort of state management tool should be used.`
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`redux thunk is middleware. It makes it so you can call action creators that return functions instead of action objects, and then /that/ function gets the dispatch method and on goes things normally.`
5. What is your favorite state management system you've learned and this sprint? Please explain why!
`Context. It makes sense and can be scaled up or down, i'm pretty sure. `
