
/**
 * Module dependencies.
 */

import router from 'koa-route'
import compose from 'koa-compose'

/**
 * Map configuration to routes
 * @param {Object[]} routes - routes to be mapped
 */
export default function (routes) {
  return compose(
    routes.map(route => router[route.method](
      route.path,
      route.middleware && route.middleware.length
        ? compose(route.middleware.concat(route.handler))
        : route.handler
  )))
}
