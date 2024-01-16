# Week 7

## Single Page Applications

-   React creates single page applications
-   where, client-side routing is done
    -   all the routes are present in the single bundle
    -   server is not hit more than once for routing

## Lazy Loading

-   provides only the bundle required to render the route
-   bundles for other routes will not be included
-   optimizes the web app

## Prop Drilling

-   repeated unnecessary passing down of state via props to child components
-   state manages by a parent component is required by a child component deep down in the component tree
-   needs unncessarily passing down the state via props through all the components in the path until the specific child component

## Context API

-   helps avoid prop drilling by teleporting the state directly to the child components that require i
-   involves three steps
    -   create the context for the state `createContext()`
    -   wrap the components (just the root) with `<CustomContext.Provider>` context provider
    -   call the state context using the `useContext(CustomContext)` hook
-   only provides syntactical sugar to avoid passing state through props
-   does not fix the unnecessary re-renders
