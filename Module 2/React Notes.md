CLI - help developers run project and manage packages/libaries

nodejs - environement that runs javascript apps on the server

framework - sets standards and guidelines for coding
libraries - collections of pre-written code that helps us work faster

libraries are more flexible than frameworks
NPM - helps us install packages

React

- js library use to create powerful dynamic web applications

why use react

- allows to build SPA to make app faster
- react have components which are reusable
- compare to other frameworks, react has the biggest community which support
  lots of libraries
- react handles all the work to change the content

SPA - apps that requires no page reloading

Client side - pages in the browser
Rendering means simply the process of turning the codes into an interface a user can see in the browser of a SPA

1. node modules - contains all the packages
2. public - contains the index htmlwhich the react will going to render all the components
3. src - contains all the components
4. index.js - where all components are rendered
5. package.json - contains info about the project
6. readme. documentation

Pre-requisite packages

- react snippets (by dsznajder)
- auto close tag (by jun han)
- auto rename tag (by jun han)
- prettier code formatter (by prettier)
  Settings > formatter > editor default formatter > set prettier , check format on paste and save
- material icon theme
- emmet > include javascript with key javascriptreact

Group Website elements into components
JSX - javascript xml

class and functional components

- the different is in the syntac
- class components use keyword and features
- functional components use functions.

note: boolean and objects are not convertible to string in jsx

virtual dom

- everytime we get an update in a jsx template, react makes a virtual dom out of it which is a js representation of a template.
- allows us to update changes quickly

DRY Principles

- D-ont R-epeat Y-ourself
  Passing data between components using props

REACT COMPONENT LIFECYCLE

1. Mounting Phase

- this is the phase where react creates the component and adds it to the page
- this phase comes with:
  a. constructor - which setups the component
  b. render method - which display the component to the page
  c. componentDidMount - this is called to allow us setup necessary actions and setup tasks

2. Updating Phase

- this phase updates the component when there is a change in component data or the props
- if anything in the component changes, react will automatically update and rerender the component ono the screen
- also during this phase, react checks if there is a need to update the component with component data
- it calls the componentDidUpdate method which displays the updated component

3. Unmounting Phase

- this happen when the component is no longer needed and gets removed in the dom tree
- during this phase, the componenetwillUnmount is called to do the cleanup task

REACT HOOKS

- a powerful feature in react that enables you to write functional component with state and lifecycle methods
- react hooks are functions that help manage different part of website or app more easy without writing a class component
- this tool can help you remember information, update website parts and share info across different app parts

HOC(high order component)

- special type of components use to share code between different parts of your app

state - refer to a javascript object that refer as the component data

react hooks

1. useState
2. useEffect

- uses lifecycle methods in functional components
- this allows you to perform actions during mounting, updating and unmounting of the component lifecycle in a functional component
- by using this hook, you will tell react that your component needs to do something after rendering
- comes with 2 arguments: callback function, dependencies

3. useRef

- a reference to an element or a value in a component that remains the same after rerendering
- its like taking a snapshot on something and still able to use it

PURPOSE OF useRef
a. allows to reference values or element in a component and keep their values persistent across rerenders
b. use to manipulate dom but providing direct access to the underlying dom node

API - acts an intermediary layer between the app and server

Concepts of props and children

Children components

- refers to components that are nested inside a container component
- these are useful for creating modular and reusable code by nesting component within another component
- useful for creating modular or reusable code

Context

- passes information between the chosen components
- by using context, we can pass information down to specific components in a more efficient and organized way to make our code more flexible, reusable and easier to maintain

Options of passing data between components

1. props

- ideal for passing data between parent and child component
- ideal if data change frequently

2. context

- if we need to pass data between multiple components or maintain a global state, context would be more suitable
- not ideal if data change frequently

Steps fo context

1. in app js - declare object value
2. create context file and import in app component
3. in app component - wrap the parent component with the mycontext.provider and pass the data
4. in your selected child component, wrap the component with mycontext.consumer

Lists

- gather components with similar info
- helps you track the components you need to show

Map function

-a built in method in javascript that is often used in react that takes an input array, performs a specific operation and return a new set of array

Conditional rendering

- help us make our a component visible or not depending on the condition

useContext hook

- connected to the contextAPI
- a tool built into react that helps us shares infor with all the components

a. createContext - a method used to create a new context object
b. useContext - is use to access and consume the values provided by the context

Error boundaries are a feature in React that allows you to catch and handle errors that occur during rendering, in lifecycle methods, or in the constructors of the whole component tree below them. They are implemented using a combination of lifecycle methods and a special componentDidCatch method.

## Pure components

useMemo memorizes the returned value
useCallback hooks

- tracks function changes and memorizes the whole function
- optimize the rendering performance of your application

React.Memo

- tracks component changes

React Profiler

- is like a speedometer that tells us how fast our application is running

React testing libraries - provides function like fire event and wait for interactions with the components during testing.

test
when clicked, api request

- render, screen, fireevent and wait for

How to test react components

1. choose to test
2. choose the testing method
3. write test

React Router

- helps build a single page app
- handle all the routing on the frontend and dont sent request on the server for new page
- a library that handles routing without multiple server requests
- React Router checks the link and then pass the component
- installed using react-router-dom

React provider

- wraps components to enable dynamic routing so that all components we create inside this wrapper can use the routing features from react router library

Nested routes and layouts

- routes the contain sections inside them or under them

Synchronous programming

- runs one function at a time

Asynchronouse programming

- runs several functions simultaneously

Callback

- help us perform parallel actions

Event loop

- is a mechanism that on the background of your browser
- it executes all operations on a single thread

Event loop phases

1. callstack - keeps track of the operations queue
2. callback - responsible for sending new functions for processing
3. web api -

Promises - connect producing and consuming code
callback hell - passing callback function to another function

Redux

- open source js library used for managing applications state
- it provides a centralized store for our application sate and logic
- it basically gives component direct acces to the data
- redux is important to make complex application easier especially that it provides consistent data across application

redux example
1- visit ticket booking center
2- form new book/cancel booking
3- submit form
4- ticket counter, 1, 2,3
5- ticket availability
6- notification to mobile number
7- message forwarded to the user

redux analogy

1. component/action creators - initiates the action
2. this action is a plain js object which has type and payload
   {
   type: "booking",
   paload: "info"
   }

3. now this actions will dispatch to reducers
4. now this reducers has actually the power to read the state from the repository directly and update the state to the central store

5. as soon as the state is updated in the central store, it triggers a subscription and this subscription pass the state as props to our components and then our components will rerender the ui again for the updated state value

Summary of redux

- the components dispatch an action with the type and payload
- then it reaches to a reducer
- then the reducer updates the central store with the new state
- then this new state triggers subscription and pass as props with mapstate to prop function to our components and our components get new state and render the ui with the new data

Redux lifecycle
