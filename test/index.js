
/**
 * Module dependencies.
 */

import koa from 'koa'
import request from 'supertest'
import compose from 'koa-compose'

import router from '../src'

const app = koa()

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

describe('easy route', () => {
  it('should compose middleware', done =>
    request(app.listen())
      .get('/')
      .expect(200)
      .expect('real text', done)
  )

  it('should route basic functions', done =>
    request(app.listen())
      .post('/')
      .expect(200)
      .expect('post worked', done)
  )
})
