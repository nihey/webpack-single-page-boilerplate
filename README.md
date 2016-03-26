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
├── assets/
│   └── image
│       └── favicon.png
├── index.html
├── package.json
├── environment.json
├── README.md
├── scripts/
│   └── index.js
├── styles/
│   └── index.less
└── webpack.config.js
```

- Your javascript entry point is `scripts/index.js`
- Your style entry point is `styles/index.less`
- 'environment.json' file provides optional environment variable settings,
  but you can delete it if you don't need it.

This uses the [indexhtml-webpack-plugin](https://github.com/unbroken-dome/indexhtml-webpack-plugin)
to build HTML files, replacing the `src` and `href` tags related to images, css, 
and scripts into their corresponding file in `dist` directory. This way, an
`index.html` file that looks like this:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Sample App</title>
    <meta charset="utf-8">
    <link href="assets/images/favicon.png" rel="icon">
    <link href="styles/index.less" rel="stylesheet">
  </head>
  <body>
    <script src="scripts/index.js"></script>
  </body>
</html>
```

Becomes this:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Sample App</title>
    <meta charset="utf-8">
    <link href="84eafba88857e5fd2e85d63beaf3fb31.png" rel="icon">
    <link href="d41d8cd98f00b204e9800998ecf8427e.css" rel="stylesheet">
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

# About

This boilerplate includes the following loaders:

  - `babel-loader`: Enable ES6 features.
  - `file-loader`: Call `require` for binary files.
  - `img-loader`: Optimize image compression.
  - `json-loader`: Call `require` for `json` files.
  - `less-loader`: Style your pages with [less](http://lesscss.org/).
  - `style-loader`: Add exports of a module as style to DOM.

It also uses the following plugins:

  - `indexhtml-webpack-plugin`: Parses your html files content and build them.
  - `extract-text-webpack-plugin`: Extract css text from bundled styles.

# License

This code is released under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/) (Public Domain)

[webpack_link]: http://webpack.github.io/
