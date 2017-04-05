'use strict'

const assert = require('assert')
const resolve = require('path').resolve
const join = require('path').join
const send = require('koa-send')
const debug = require('debug')('koa-map-local:index')

module.exports = function(publicDir) {
  publicDir = resolve(publicDir)
  return async function(ctx, next) {
    let domain = ctx.get('host')
    const ctxpath = ctx.path
    const query = ctx.query

    // rm port
    domain = domain.split(':')[0]

    const root = join(publicDir, domain)
    const filepath = await send(ctx, ctxpath, {
      root,
      setHeaders: () => {
        ctx.set('cache-control', 'no-cache')
      }
    })

    if (!filepath) {
      return next()
    }
  }
}