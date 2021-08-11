7/30:

1. algo

```js
/*
Case 1:

input:
let arr = [
  {s:0, e:1},
  {s:3, e:5},
  {s:4, e:8},
  {s:10, e:12},
  {s:9, e:10},
];

output: [ { s: 0, e: 1 }, { s: 3, e: 8 }, { s: 9, e: 12 } ]

Case 2:

input:
let arr = [
  {s:0, e:1},
  {s:3, e:5},
  {s:4, e:8},
  {s:10, e:12},
  {s:7, e:10},
];

output: [ { s: 0, e: 1 }, { s: 3, e: 12 } ]
*/

// solution 1:
const arrangeMeetings = (arr) => {
  arr.sort((a, b) => a.s - b.s);

  let res = [{ ...arr[0] }];
  arr.shift();

  while (arr.length) {
    let hasOne = false;
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (res[i].e >= arr[j].s) {
          if (res[i].e <= arr[j].e) {
            res[i].e = arr[j].e;
          }
          arr.shift();
          hasOne = true;
          j--;
        }
      }
    }
    if (!hasOne) {
      res.push({ ...arr[0] });
      arr.shift();
    }
  }
  return res;
};

// solution 2:
const arrangeMeetings2 = (arr) => {
  arr.sort((a, b) => a.s - b.s);

  let res = [{ ...arr[0] }];

  let resIndex = 0;
  let arrIndex = 1;

  while (arrIndex !== arr.length) {
    let hasOne = false;
    let curVar = arr[arrIndex];

    if (res[resIndex].e >= curVar.s) {
      if (res[resIndex].e <= curVar.e) {
        res[resIndex].e = curVar.e;
      }
      arrIndex++;
      hasOne = true;
    }
    if (!hasOne) {
      res.push(curVar);
      arrIndex++;
      resIndex++;
    }
  }
  return res;
};
```

2. 7/30/2021 interview questions:

- concept question:

  1. GraphQL
  2. jwt authentication
  3. explain this keyword, what is call, bind, and apply methods?
  4. explain prototype inheritance
  5. class method vs instance method
  6. Constructor Function method vs prototype method
  7. microtask queue vs macrotask queue
  8. Rem vs em
  9. absolute vs relative

- algorithm question:
  1. arrange multiple meetings

---

8/9:

1. Do a brief interview.

-

2. Are you still working in the company?

- The project will end this Friday.

3. What's the reason you left the job?

- Maintainmence team has taken over the job, and I am now looking for a new challenge.

4. What kind of role are you looking for?

- My highest priority is a frontend role, and I have profocice in React, JS, NodeJS. Also I am a flexible person, I can work in the backend role too.

5. Do you know GraphQL? Can you explain the pros and cons between Restful API and GraphQL?

- GraphQL is a query language for APIs that enables declarative data fetching in order to give the client the power to specify exactly the data that is needed from the API. It makes easier to evolve APIs over time.

- Firstly, it does not have anything to do with databases.
- Secondly, it is not a REST replacement, but an alternative.

- how to use

- query

```js
query {
  user {
    name
    age
  }
}
```

- REST:

- REST (Representational State Transfer) is a software architectural style that defines a set of constraints which make any web service – a true RESTful API.

- The REST constraints are:

  - `Client-server architecture`
  - `Stateless.` This means that the server does not remember if the user is sending is first request or not.
  - `Cacheability`
  - `Layered system`, the client did not know if is connected to the end server or not.
  - `Uniform interface`. The main guideline is that each resource has to be identified on requests.

- result

```json
{
  "user": {
    "name": "Johnathan Joestar",
    "age": 27
  }
}
```

- doc:[GRAPHQL VS REST: WHICH ONE IS BETTER?](https://www.imaginarycloud.com/blog/graphql-vs-rest/)

- As mobile usage increased, so did the number of different front-end frameworks and platforms that run client applications. Given REST's inflexibility, it was harder to develop a single API that could fit the requirements of every client.

- GraphQL allows for more flexibility than REST.

- Why GraphQL is better than REST?

  - GraphQL

- Restful Api:

  - pros:
  - cons: you will end up with two server requests instead of one, and as you continue to scale, you may have even more requests to different endpoints in order to fetch all the needed data, since each specific view needs its specific endpoint. If at any point a view needs new data, the development has to slow down until the endpoint is updated.
  - cons: Under-fetching, Over-fetching, Slow front-end development

- GraphQL:

  - pros: mobile, flexibility, You would only have one request, and you would not have to make multiple round trips to the server. Having a website fetch useless data is not ideal, GraphQL allows the client to only fetch the needed data.

  ```js
  query {
    posts {
      title
      subtitle
      date
      author {
        name
      }
    }
  }
  ```

  - cons: When using GraphQL `there is no way to get a globally unique identifier for a given object` because we use the same URL for all the requests. To have cache on GraphQL you have to setup your own cache.

  - Monitoring and Error Reporting: When using REST you can build a monitoring system based on API responses. On GraphQL you don't have that, because it always return 200 OK status response.

  - Resource Attacks: If a malicious actor tries to submit an expensive nested query to overload your server or database and your server does not have the right protections, you will be vulnerable to DDoS (Denial-of-service attack) attacks.

- summary:

  - GraphQL is a query language and a set of tools that use HTTP to work on `single endpoints` in order to optimize flexibility and performance.

  - `In GraphQL, data is organized into a graph, and objects are structured by nodes following a schema.`

  - GraphQL solves both over-fetching and under-fetching issues by allowing the client to request only the needed data.

  - Since the client now has more freedom in the fetched data, development is much faster with GraphQL than what it would be with REST.

  - In GraphQL, the identity of an object is separated from how a developer fetches it. In REST, the endpoint is the identity of an object.

  - In GraphQL, a single query can call various resolvers to provide a response with multiple resources. In REST, one query usually calls one route handler function.

  - It is possible to transverse from the entry point to the related data with a single request. Contrarily, REST requires calling several endpoints to fetch related resources.

- Similarities

  - http `GET` request, URL, JSON, functions on the server,
  - In GraphQL API, the list of fields (considering both the Mutationand the Query types) is `identical to the list of endpoints in a REST API.`


- GraphQL uses its own type system to define the schema of an API, , with its syntax called Schema Definition Language (SDL). The schema serves as a contract between the server and the client to define how a client can access the data.

- Once the schema is defined, the front-end and back-end teams can work independently, as the front-end can be easily tested with mock data. 

- `If you are aiming to develop an API to be used on a mobile application you should have GraphQL as first option because bandwidth usage matters. If your application requires a robust API, with caching and a monitoring system you should go with REST.`


---
6. what is web-component?

  - Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

  - Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

  - it is nativelly supported by browser, also support HTML JS CSS.

7. Do have experience with accessibility? What is the most recent bug you fix related to accessibility?

  - example: non-sememtic tag.

8. Do have experience with cross-browser issue? What is the most recent bug you fix related to cross-browser issue?

  - apple safari:disable local storage, fix it with cookie services, the application crashed, and I am the one fixed the issue.

9. When do you graduate?
  - I graduate at 2010.

10. Do you have experience with Docker?

  - Yes, we are using it to set up our local develpment enviroment.

11. What is SPA?

  - MPA is fetching mutiple pages from server side.
  - SPA is fetching the whole page once, then change the page by some JS functions.
  - SPA has load problem which is slow when the application is large.
  - To fix it, we can use lazy loading and serverside rendering.

 12.  What are some features in HTML5 you are using?

  - nav tag
  - sidebar tag
  - article tag

13. `cookies vs local storage`

  - Cookies are smaller and send server information back with every HTTP request, while LocalStorage is larger and can hold information on the client side.

  -  Cookies hold a very small amount of data at a maximum capacity of 4KB. Cookies are used in different ways, such as in storing the pages visited on a site or a user’s login information. Cookies are limited in that Cookies can only store strings.

  - One of the most important differences is that unlike with cookies, data does not have to be sent back and forth with every HTTP request.

  - Cookies are primarily for reading server-side, local storage can only be read by the client-side. 

  - Local storage are accessible from the client-side only (web servers can't access them directly). 

  - Unlike Cookies where all Cookies (for that domain) are sent on each request, Local and Session Storage data aren't sent on each HTTP request. They just sit in your browser until someone requests it.

  - Cookies

    - Has different expiration dates (both the server or client can set up expiration date)
    - The Client can't access the Cookies if the HttpOnly flag is true
    - Has SSL Support
    - Data are transferred on each HTTP request
    - 4kb limit

  - Local Storage

    - Has no expiration date
    - Client only
    - Has no SSL support
    - Data are not transferred on each HTTP request
    - 5 mb limit (check with the browser)

  - doc. [cookies vs localStorage](https://dev.to/iggredible/cookies-vs-local-storage-vs-session-storage-3gp3)


14. Do you have experience with responsive design?

  - set the breakpoint
  - how do you set initial scale for devices?
    - view-port in the head-tag

15. `differnt types of CSS position.(static, fixed, absulute, relative, sticky).`

16. what is z-index in CSS?

  - An element with greater stack order is always in front of an element with a lower stack order.

17. Do you use flexbox or css-grid? What do you prefer and why?

  - flexbox, more broswers and mobile devices supported, also nativelly support flexbox.


--- 

8/10:

1. vendor calls

2. technical interview.

3. 
