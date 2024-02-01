# Week 9

## TypeScript

-   a programming language developed and maintained by Microsoft
-   is a strict **syntactical superset** of JavaScript and adds optional statci typing to the language
-   gets transpiled down to javascript by the typescript compiler `tsc`
    -   other typescript compilers include `esbuild` and `swc`
-   while transpilation, the typescript compiler performs **type checking** and converts the code into javascript only if no errors (including type errors) are found

### `tsconfig.json`

-   the `tsconfig` file has a bunch of options that can be updated to configure the compilation process

#### `target`

-   specifies the ECMAScript target version to which the TypeScript compiler will the compile the TypeScript code to

#### `rootDir`

-   specifies the location where the TypeScript compiler looks for TypeScript files

#### `outDir`

-   specifies the location where the generated JavScript files are placed

#### `noImplicitAny`

-   complains if set to true and no type is provided for variables and parameters
-   generally used when migrating existing code-base from JavaScript to TypeScript
