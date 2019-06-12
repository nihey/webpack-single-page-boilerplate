# Webpack Single Page Boilerplate

A boilerplate for a single page app using [webpack][webpack_link]

[![Build
Status](https://travis-ci.org/nihey/webpack-single-page-boilerplate.svg)](https://travis-ci.org/nihey/webpack-single-page-boilerplate)
[![Dependency
Status](https://david-dm.org/nihey/webpack-single-page-boilerplate.png)](https://david-dm.org/nihey/webpack-single-page-boilerplate)

# Why should I use it

So far, this is the best way I found to build files like `index.html` into
[webpack][webpack_link]. This boilerplate handles Javascript, CSS and HTML
bundling using only [webpack][webpack_link].

# Usage

The general directory structure is:

```
.
├── assets
│   └── images
│       └── favicon.png
├── babel.config.js
├── config
│   ├── default.json
│   └── production.json
├── index.html
├── package.json
├── README.md
├── src
│   ├── index.js
│   └── styles
│       └── index.scss
└── webpack.config.js
```

- Your javascript entry point is `src/index.js`
- Your style entry point is `src/styles/index.scss`

[`config`][config_link] node module is being used, this way you can define
your settings under config/{NODE_ENV}.json and build your project with
different settings for different environments. Just change your `NODE_ENV`
environment variable to build your project:

### Example

```
# Uses 'config/default.json'
$ npm run build
# Uses 'config/default.json' overwritten by 'config/production.json'
$ NODE_ENV=production npm run build
# Uses 'config/default.json' overwritten by 'config/staging.json'
$ NODE_ENV=staging npm run build
# Uses 'config/default.json' overwritten by 'config/anything.json'
$ NODE_ENV=anything npm run build
```

All config variables are available under the `CONFIG` global:

```json
# config/default.json
{
  "MY_API_URL": "https://nihey.org"
}
```
```javascript
// => "https://nihey.org"
console.log(CONFIG.MY_API_URL)
```

# About

This boilerplate includes the following loaders:

  - `babel-loader`: Enable ES6 features.
  - `file-loader`: Call `require` for binary files.
  - `img-loader`: Optimize image compression.
  - `json-loader`: Call `require` for `json` files.
  - `scss-loader`: Style your pages with [scss](https://sass-lang.com/).
  - `style-loader`: Add exports of a module as style to DOM.

It also includes the following plugins:

  - `extract-text-webpack-plugin`: Extract css text from bundled styles.

# License

This code is released under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/) (Public Domain)

[webpack_link]: https://webpack.js.org/
[config_link]: https://www.npmjs.com/package/config
