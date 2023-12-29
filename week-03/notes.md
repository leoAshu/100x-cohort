# Week 3

## Middlewares

-   are functions that have access to the request (`req`) and response (`res`) objects
-   also have access to the `next()` middleware function in the application's request-response cycle
-   can perform various tasks, modify the request and response objects, or end the request-response cycle
-   are executed seuqntially in the order they are defined
-   can be used for a wide range of purposes, including
    -   logging
    -   authentication
    -   handling errors
    -   parsing request bodies and more

### Logger Middleware

```
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware in the chain
};

app.use(loggerMiddleware);

```

### Body Parser Middleware

```
const bodyParser = require('body-parser');

// Parse incoming JSON requests
app.use(bodyParser.json());

```

### Authentication Middleware

```
const authenticateMiddleware = (req, res, next) => {
  // Check if the user is authenticated
  if (/* logic to check authentication */) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.use(authenticateMiddleware);

```

### Error Handling Middleware

-   also known as **Global catches**

```
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

app.use(errorHandlerMiddleware);

```

## Zod

-   is a TypeScript-first schema declaration and validation library
-   provides a concise and expressive way to define data validation rules and ensures that input data adheres to those rules
-   leverages TypeScript's static typing to provide a high level of type safety during development
-   provides a range of built-in validation methods and emits detailed error messages

```
const express = require('express');
const { z } = require('zod');

const app = express();
const port = 3000;

// Define a schema using Zod
const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().int().positive(),
});

// Middleware for input validation
const validateUser = (req, res, next) => {
  try {
    // Validate the request body against the defined schema
    userSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

// Use the validation middleware for specific routes
app.post('/users', validateUser, (req, res) => {
  // Process the request if validation passes
  res.json({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

```

## Databases

-   key feature of a database is to store data persistently
-   provides additional features to query, delete and update data
-   alows applications to be scalable by removing the state, i.e. data from the app to a separate database and making the applications stateless
-   examples of data stored in databases for Linkedin
    -   user data
    -   user posts
    -   user connection relationships
    -   messages
-   allow access to 4 primitives
    -   Create data
    -   Read data
    -   Update data
    -   Delete data
    -   aka CRUD
-   3 jargons to know in Databases
    -   Cluster
    -   Database
    -   Table

> Note:
>
> -   To get data from a database, a user hits an http server
> -   This server in turn fetches the data from the database and returns to the user
> -   Why don't we let the user hit the database directly? What extra does the http server provide exactly?
>     -   Databases were created using protocols not understood by browsers
>     -   Databases don't provide granular access. The either provide all the data or none of it
>     -   Some databases (Firebase) do allow us to get rid of the http server and try their best to provide granular access
>     -   Http servers in the middle also allow for user authentication checks

### MongoDB

-   is a structureless database
-   the data need not follow a defined structure
-   allows inserting data of different structure into the same collection

#### Mongoose

-   is a package that facilitates interaction with MongoDB
-   needs to define a schema as the first step
    -   counter-intuitive to the schema-less MongoDB
    -   does so to make db interactions safe and valid
    -   is like a safety abstraction layer on MongoDB similar to TypeScript over JavaScript

```
// Defining Schema

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,

    // this is how relationships are defined in MongoDB
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    price: 5999
})
```
