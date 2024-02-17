# Week 10

## ORMs

-   stands for Object-Relational Mapping
-   a technique to convert data between incompatible type systems in object-oriented programming languages
-   creates a **virtual object database** that can be used from within the programming language
-   are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code

### Benefits

-   Simpler syntax
    -   converts objects to database queries under the hood
-   Abstraction that provides a unified API irrespective of the DB
    -   makes the code compatible with any type of database
-   Type safety/Auto completion
-   Automatic migrations
    -   keeps a track of all the DDL queries used to reach the particular schema of a database

## Prisma

-   is a `Node.js` and `TypeScript` specific ORM
-   provides the following features
    -   intuitive data model
        -   a single file called `schema.prisma`
        -   defines the tables, columns and relationships
    -   automated migrations
        -   prisma generates and runs database migrations based on changes to the Prisma schema
    -   type safety
        -   prisma generates a type-safe prisma client based on the Prisma schema
    -   auto completion

### Steps involving Prisma usage:

-   Install and initialize prisma
    -   `npx prisma init`
-   Define the schema in `schema.prisma` file
-   Invoke the migration
    -   `npx prisma migrate dev --name <name_of_migration>`
-   Create the prisma clients for the each schema and use the functions instead of writing queries
    -   `npx prisma generate`
