# koa-map-local

[![Greenkeeper badge](https://badges.greenkeeper.io/magicdawn/koa-map-local.svg)](https://greenkeeper.io/)
> Charles map local for Koa.js

[![Build Status](https://img.shields.io/travis/magicdawn/koa-map-local.svg?style=flat-square)](https://travis-ci.org/magicdawn/koa-map-local)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/koa-map-local.svg?style=flat-square)](https://codecov.io/gh/magicdawn/koa-map-local)
[![npm version](https://img.shields.io/npm/v/koa-map-local.svg?style=flat-square)](https://www.npmjs.com/package/koa-map-local)
[![npm downloads](https://img.shields.io/npm/dm/koa-map-local.svg?style=flat-square)](https://www.npmjs.com/package/koa-map-local)
[![npm license](https://img.shields.io/npm/l/koa-map-local.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```sh
$ npm i koa-map-local --save
```

## API

```js
const mapLocal = require('koa-map-local')
const app = new (require('koa'))

const publicDir = __dirname + '/public'
app.use(publicDir)

app.listen(1337)
```

### `mapLocal(publicDir)`

```
GET http://proxytest.com/test/resource.json
will send `${ publicDir }/proxytest.com/test/resource.json` file
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org