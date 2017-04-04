'use strict'

const send = require('koa-send')
const pify = require('promise.ify')
const fs = pify.all(require('fs'))
const path = require('path')

const exist = async file => {
  let ok = false
  try {
    await fs.accessAsync(file, fs.F_OK)
    ok = true
  } catch (e) {
    // ignore
  }

  return ok
}

module.exports = function(options) {
  const {
    domains,
    publicDir,
  } = options

  return async function(ctx, next) {
    const domain = ctx.get('host')
    const ctxpath = ctx.path
    const query = ctx.query

    const filepath = path.join(publicDir, domain, ctxpath)
    const ok = await exist(filepath)
    if (!ok) return next()

    await send(ctx, filepath, {
      setHeaders: () => {
        ctx.set('cache-control', 'no-cache')
      }
    })
  }
}