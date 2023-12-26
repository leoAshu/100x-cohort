# Week 4

## Debouncing

-   optimizes api calls in usecases like search suggestions
-   delays sending api requests
-   is called `Throttling` when the same implemented in the backend

```
// Basic Debouncing

let timeout
function debouncedCalculateSum() {
    // delay the call to calculateSum until debouncedCalculateSum has not been called for 100 ms
    // and has been called atleast once

    // clear timeout if it has been called again while the previous clock is still running
    clearTimeout(timeout)

    // start a new clock
    timeout = setTimeout(() => {
        calculateSum()
    }, 100)
}

async function calculateSum() {
    const a = parseInt(document.getElementById('first').value)
    const b = parseInt(document.getElementById('second').value)

    const response = await fetch(`https://sum-server.100xdevs.com/sum?a=${a}&b=${b}`)

    const result = await response.text()

    document.getElementById('result').innerText = `Sum is ${result}`
}
```

## Why React?

-   creating a dynamic website using DOM manipulations is very inefficient
-   React library makes this process efficient by comparing states and doing the minimal operations needed to update the state
-   React's sole purpose is to find the diff between old and new states
-   the actual operations are defined in separate libraries used by React
    -   React-DOM for websites
    -   React Native for native mobile apps
