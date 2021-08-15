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

12. What are some features in HTML5 you are using?

- nav tag
- sidebar tag
- article tag

13. `cookies vs local storage`

- Cookies are smaller and send server information back with every HTTP request, while LocalStorage is larger and can hold information on the client side.

- Cookies hold a very small amount of data at a maximum capacity of 4KB. Cookies are used in different ways, such as in storing the pages visited on a site or a user’s login information. Cookies are limited in that Cookies can only store strings.

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

---

8/11:

1. some idea, what is the thing they are looking for?

2. macketing number, `get some license from IT team.`

3. phone accessing.

4. phone number is active right now, check your email and get the phone number.

5. create some variables and store them.

6. startTimer

```html
<p class="stopwatch__timer"></p>
```

```js
let startTimerFlag;

const timerElement = document.querySelector(domSelectors.timers);

const timerBtnElement = document.querySelector(domeSelectors.timerBtn);

timerBtnElement.addEventListener('click', cb);

let startTimerFlag = Date.now();

setInterval(() => {
  let diffTimerMsc = Date.now() - startTimerFlag;
}, 1000);

const [hh, mm, ss] = converNumToString(num);

let timerInterval;

// return utc time in mili second.
Date.now();
```

7. event loop

```bash
- event loop
- js is using eventloop to handle async. callstack is single thread.
- async api, the async api callback function will not execute imediatlly, it will be sent to the queue, the callback fucntion.

- So after the 1 second in setInterval means just put the callback into the queue but not invoke it immediately, and the time to invoke the callback function is not gurantee because there may have some other sync code or higer priority async callback.

- each function just do one thing.

-
```

- assignment, event loop,

- how do you explain event loop?

- for the react part, what is virtual dom?

- what is the benifit of react?

- idea of component reuseable
- update the component at the same time
- cross-browser-issue

- angular - framwork, learning cure is much deeper.

- react - library, easier, more flexibility.

- shallow dom vs virtual dom.

- that is the one idea I can think so far.

- What is the limitation of React?

- virtual dom?

- js object to reflect the dom, it is not a real dom.

- by using the vd, previous dom vs next virtual dom, react will use the deep algo to compare the pvd and nvd, then find the best way to update the dom.

- dom manipulation is somehow expensive.

- get a element/ change the element.

- dom

```js
console.dir(document);

react.creatElement();
```

- angular: template
- react: JSX

- what is JSX?

- can you browser read JSX?

- declaritive program?

- you follow my rule, something like using the library.

- imparitive programming?

- OOP vs FP, interestion concept.

- OOP, you are chage the inside all the time.

- pure funciton, immuable, easy to debug.

- oop, instance.

- high order component, reuse lifecycle method.

- what kind of high order compoennt you use before?

- connect from react-redux
- withRouter, permission, withError,

- what is hooks?

- you cannnot use hooks in class component.

- HOC hell, maintainence hell

- hooks can solve, do some , custommize hook,

- useThunk, context api to reuse custommize hooks.

- assignment

- have you create your custom hooks before?

- for authentication, I create a lot of custom hooks before.

- custom hooks naming
- you can not create the hooks inside the function component.

- you cannot use hooks inside a condition./ Reason: mess up your hooks system order, also you will get a error message.

- what is pure compoennt?

- pure compoent is the compoennt is about shouldcompoentn update.

- reducer redundant update
- for class compoent.

- what is react.memo?

- for the functional react.memo. shouldComponentUpdate.

- userCallBack, useRef, useEffect

- story: challenging in the past.

- dating app design diagram system

---

8/12

1. resume in the pool

2. get ready for call

3. work authorization licien

4. photo, visa, dob, location

5. vandor call, open for relocation

6. current position

7. technical question: const mutable, how do you condsider babel?

8. Ok, it works for me, after first job.

9. relocation after 6 months

10. walmart,write down their name

11. walmart one / tesla one

12. how to do the support

13. big room, enough lable, set everything, download java 16.

14. one screen.

15. tomorrow, make sure hardware and software thing. see the background.

16. set up the virtural background

17. 20 mutiple choice questions.

18. improve yourself, you also know the questions.

19. technical questions.

20. point them out.

21. walmart is kind of interesting.

22. first come first get

23. one week.

24. ask the IT team.

25. test your phone. email address.

26. walmart questions.

---

8/13:

1. event loop:

- review event-loop article in `ever-note`.

- queue: FIFO, stack: FILO

- callstack is a `FILO` structure.

- how event-loop work?

- web api is wrote by c++, another thread.

- how event loop works?

- after the time reach, web api will throw the callback function into the event queue, the event loop will check the callstack if is empty, then if it's true, will pick the first one callback function in the queue and invoke it.

-

```js
// mock api
const mockApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('get responese.');
    }, 2000);
  });
};

const foo = () => {
  console.log('start');
  let startTimer = Date.now();
  mockAPiCall().then((data) => {
    let endTimer = Date.now();
    console.log('time diff', endTimer - startTimer);
  });
};

const asyncFoo = async () => {
  return 5;
};

// will return pending promise.
console.log(asyncFoo());

const anotherAsync = async () => {
  let data = await new Promise((res, rej) => {
    setTimeout(() => {
      res('get responese.');
    }, 2000);
  });
  return data;
};
```

- if we change i < 1000000, time difference will be greater.

- 要明确 callback function 是什么时候放进 event queue，还有什么时候执行的？

- 难点：promise 是怎样定义的，它的 callback 是什么时候执行的？

- 如何使用 async 去定义 promise。

- draw the event loop callstack

- solve all the algo questions.

- debounds, appleOA, why do we need debounds?

- higher order function.

```jsx
import React, { useState, useEffect } from 'react';

const mockApiCall = (query)=>{
  new Promise((res, res)=->{
    setTimeout(()=>{
      res(`Data back`, Query:${query})
    })
  })
}
const App = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input) {
      mockApiCall(input).then(data=>{
        console.log(data);
      })
    }
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <div>{input}</div>
    </div>
  );
};
```

only make request when a user stop typing in 1 second

- 我关注众新闻有一段时间了，真心支持和喜欢你们的真实报道，也给大众看到了不一样的中国。但个人在这里提一个小小建议，众新闻报道的负面新闻，或者说揭露大陆弊端的新闻占比有点高，首先声明这跟政治立场无关，我也不反对这种报道，个人也承认这种负面的新闻天天都有在发生。但作为一个观众层面，我作为一个观众，从众新闻中看到的中国是9坏1好的，出来的效果也偏向对中国大陆的负面印象。举一个不恰当的例子，按比例计算，香港700万人每天发生一件丑闻，大陆14亿人一天就大概发生20件丑闻，我相信把这20件丑闻放在众新闻全部报道可能30分钟时间都不够用，如果在一集的众新闻里面全部报道负面新闻，给观众的感觉就是中国大陆很坏。那么返回刚才那个例子，虽然是有20件丑闻，那么就说明大陆真的很差吗，按比例算香港发生1件丑闻是不是也很差？ 最后再想强调一下，不反对报道负面新闻，也支持报道真实情况，大陆每天发生的负面新闻也足够众新闻做一个星期的节目。但是否要一直大幅度报道负面新闻，这也不是我作为一个观众决定的，这取决于众新闻的使命，大幅度报道负面新闻客观上是让人觉得中国大陆一无是处，如果众新闻是想让观众产生这种观感那也是一种使命，我干预不了。如果众新闻是想推动国家发展和展示客观形象，那又是不同的使命。大陆是否一无是处，众新闻说了不算，大陆人说了不算，香港人说了也不算，共产党说了也不算，世界都在看，中国改革开放这么多年，有成就也有错误，不希望看到一味的吹捧，也不希望看到一味的贬低。作为媒体人，维持中立和给出客观评价也是很重要的。


- 如何实现 mount file without react-router. conditional rendering.

- 

































