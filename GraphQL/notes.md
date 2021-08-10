1. bash commands

```bash
$ npm init -y
$ npm i express express-graphql graphql
$ npm i nodemon --save-dev
```

2. script

```json
"scripts":{
  "dev":"nodemon server.js"
}
```

3. set up server.js

- server.js

```js
const express = require('express');
const expressGraphQL = require('express-graphQL');

const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const app = express();

const schema = new 

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
```

4. create a schema

```js

```
