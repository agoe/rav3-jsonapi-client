# rav3-jsonapi-client

> JSON API data provider for react-admin, V3 Style, Support for SAFRS and ApiLogicServer

[![NPM](https://img.shields.io/npm/v/rav3-jsonapi-client.svg)](https://github.com/agoe/rav3-jsonapi-client/packages/607376) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

this a fork from henvo/ra-jsonapi-client
## Install
rav3-jsonapi-client  package  is hosted at github

place a .npmrc file in your projects root directory with one line:
@agoe:registry=https://npm.pkg.github.com 
```bash
npm install  @agoe/rav3-jsonapi-client  --registry=https://npm.pkg.github.com
yarn add agoe/rav3-jsonapi-client --npmRegistryServer https://npm.pkg.github.com
```

## Usage
A JSONAPI compatible data provider for
[react-admin](https://github.com/marmelab/react-admin).

Supports:
[SAFRS](https://github.com/thomaxxl/safrs)
[ApiLOgicServer](https://github.com/valhuber/ApiLogicServer)


## Features
Currently these actions will be supported:

* `GET_LIST` 
* `GET_ONE`
* `CREATE`
* `UPDATE`
* `DELETE`
* `GET_MANY`
* `GET_MANY_REFERENCE`

In this Alpa version only GET_LIST is supported
## Installation

```sh
# via npm
npm install ra-jsonapi-client

# via yarn
yarn add ra-jsonapi-client
```

## Usage

Import this package, set the base url and pass it as the dataProvider to
react-admin.

```javascript
//in app.js
import React from "react";
import { Admin, Resource } from "react-admin";
import jsonapiClient from "ra-jsonapi-client";

const dataProvider = jsonapiClient('http://localhost:3000');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    ...
  </Admin>
);

export default App;
```

## Options
This client allows you to set some optional settings as the second parameter:

``` javascript
// Configure some settings.
const settings = { ... };

// Pass it as the second parameter after the base URL.
const dataProvider = jsonapiClient('http://localhost:3000', settings);
```

### Total count
Since JSONAPI [does not specify](http://jsonapi.org/examples/#pagination)
a standard for the *total count* key in the meta object, you can set it with:

``` javascript
const settings = { total: 'total-count' };
```

Which will work for:
``` json
{
  "data": { ... },
  "meta": {
    "total-count": 436
  }
}
```
If this option is not set it will fall back to `total`.

### Custom HTTP headers
Custom headers can be set by providing a `headers` object in `options`:

``` javascript
const settings = {
  headers: {
    Authorization: 'Bearer ...',
    'X-Requested-With': 'XMLHttpRequest'
  }
}
```
The default value is:
``` javascriptgit branch -M main
{
  Accept: 'application/vnd.api+json; charset=utf-8',
  'Content-Type': 'application/vnd.api+json; charset=utf-8',
}
```

### Update method (PUT vs. PATCH)
First versions used `PUT` as the default update HTTP method.
In version 0.5.0 this was changed to `PATCH` since it complies with the
JSONAPI standard.. You can still use `PUT` by declaring the update method in
the settings:

``` javascript
{
  // Set the update method from PATCH to PUT.
  updateMethod: 'PUT',
  // Set the
  total: 'count'
}
```

## License

MIT © [agoe](https://github.com/agoe)
