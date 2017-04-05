'use strict'

const path = require('path')
const Koa = require('koa')
const app = new Koa()
const mapLocal = require('../')

const publicDir = path.join(__dirname, '../test/fixtures/public')
app.use(mapLocal(publicDir))

app.listen(1091, function() {
  console.log('use switch-omega switch to localhost:%s', this.address().port)

  console.log('')
  const url = 'http://proxytest.com/test/resource.json'
  console.log('try navigate to %s', url)
})