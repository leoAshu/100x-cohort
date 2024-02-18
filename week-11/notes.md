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
