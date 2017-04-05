'use strict'

const path = require('path')
const Koa = require('koa')
const mapLocal = require('../')
const request = require('superagent')
require('superagent-proxy')(request)

describe('Simple Test', function() {

  let app
  let server
  beforeEach(function() {
    app = new Koa()

    const publicDir = path.join(__dirname, 'fixtures/public')
    app.use(mapLocal(publicDir))

    server = app.listen()
  })

  it('it works', async function() {
    const proxy = 'http://localhost:' + server.address().port
    const res = await request
      .get('http://proxytest.com/test/resource.json')
      .ok(res => res.status < 500)
      .proxy(proxy)

    res.status.should.equal(200)
    res.body.should.match({
      'key1': 'value1',
      'foo': 'bar'
    })
  })

  it('404', async function() {
    const proxy = 'http://localhost:' + server.address().port
    const res = await request
      .get('http://proxytest.com/test/resource2.json')
      .ok(res => res.status < 500)
      .proxy(proxy)

    res.status.should.equal(404)
  })
})