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

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { type: GraphQLString },
      resolve: () => `Hello World`,
    }),
  }),
});

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
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

5. call that query.

```json
query{
  message
}
```

- result

```json
{
  "data": {
    "message": "Hello World"
  }
}
```

- 之所以使用 message 是因为在 schema 中定义了这个。
- query name: HelloWorld, Fields - message: string, content: `Hello World`。

---

6. authors & books example.

- server.js

```js
const express = require('express');
const expressGraphQL = require('express-graphQL');

const authors = [
  {
    id: 1,
    name: 'Lorrin',
  },
];

const books = [
  {
    id: 1,
    name: 'Harry Potter',
    authorId: 1,
  },
];

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const app = express();

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of a book.',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter((book) => book.authorId === author.id);
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author.',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find((author) => author.id === book.authorId);
      },
    },
  }),
});

// create a custom tyGraphQLObjectType.
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A Single Book',
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of All Books',
      resolve: () => books,
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) =>
        authors.find((author) => author.id === args.id),
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of All Authors',
      resolve: () => authors,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
```

- run the query

```js
{
  books{
    id
    author{
      name
    }
  }
}
```

```js
{
  authors{
    id
    name
    books{
      name
    }
  }
}
```

```js
{
  book(id:1){
    name
    author{
      name
    }
  }
}
```

```js
{
  author(id:1){
    name
    book{
      name
    }
  }
}
```

- 在这里设定了一个 query， 名字叫做 `Query`，然后就可以按照这个名字找到对应的内容。

- 在后端设定好 schema 之后，前端可以按需提出请求，前提是熟悉 schema 的设计。

7. mutations.

```js
const RootMutationType = new GraphQLObjectType({
  name: 'Nutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add A Book',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId,
        };
        books.push(book);
        return books;
      },
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add An Author',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const author = {
          id: author.length + 1,
          name: args.name,
        };
        authors.push(author);
        return authors;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
```

```js
mutation{
  addBook(name:"New name", authotId:1){
    id
    name
  }
}
```

```js
mutation{
  addAuthor(name:"New Author"){
    id
    name
  }
}
```
