
# Koa Easy Route

Configuration-based routing for Koa.js

# Setup

Install (and mark) the dependency-
`npm install --save koa-easy-route`

# Usage

```js
var router = require('koa-easy-route');
app.use(router([
  {
    method: 'get',
    path: '/',
    handler: function *(next) {
      yield next
      this.body = 'text'
      yield next
    },
    middleware: [
      function *(next) {
        yield next
        this.body = 'real text'
      }
    ]
  },
  {
    method: 'post',
    path: '/',
    handler: function *(next) {
      this.body = 'post worked'
    }
  }
]))
```

A _route_ must contain a `method`, `path`, and `handler`. You may
optionally also specify `middleware[]`, which will be _[compose]_'d.

[compose]: https://github.com/koajs/compose
