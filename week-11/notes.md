# Week 1

## Serverless Backends

-   is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers
-   does not mean there are no servers involved; instead, it means that developers and operators do not have to worry about the servers
-   an application deployed on serverless backends automatically
    -   deploy
    -   autoscale
    -   charge on a `per request` basis
-

### Problems with serverless backends approach

-   more expensive at scale
-   cold start problem

### When to use a serverless architecture?

-   ideal for for a project that is just starting up
-   dont want to worry about deployments
-   when you can't anticipate the traffic and don't want to worry about autoscaling
-   if you have very low traffic and want to optimize forn costs

### Popular serverless providers

-   AWS Lambda
-   Google Cloud Functions
-   Cloudflare Workers

## Cloudflare Workers

-   do not use the Node.js runtime
-   have their custom developed runtime called Workers runtime
-   uses the V8 engine, similar to Chromium and Node.js

### How Cloudflare works?

-   [Detailed Blog Post](https://developers.cloudflare.com/workers/reference/how-workers-works/#:~:text=Though)
-   V8 orchestrates isolates
-   isolates are lightweight contexts that provide your code with variables it can access and a safe environment to be executed within
-   a single runtime can run hundreds or thoussands of isolates, seamlessly switching between them
-   each isolate's memory is completed isolated, so each piece of code is protected from other untrusted or user-written code on the runtime
-   isolates are also designed to start very quicky
-   instead of creating a virtual machine for each function, an isolate is created within an existing environment
-   this model eliminates the cold starts of the virtual machine model
-   other serverless providers use containerized processes on contrary to Cloudflare Workers that use isolates

## Deploying Frontends on AWS

-   requires two key services
    -   storage: `S3`
    -   content delivery network: `CloudFront`
-   `S3` acts as an object store that provides `buckets` to store objects like images, videos, scripts, etc
-   the `buckets` have an associated url known as the origin url
-   `Cloudfront` service is used to point a distribution to the origin url as the source of the distribution
-   public access to the content is provided by the distribution url
