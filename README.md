# expect-dom

[![build status](https://img.shields.io/travis/mjackson/expect-dom/master.svg?style=flat-square)](https://travis-ci.org/mjackson/expect-dom)
[![npm package](https://img.shields.io/npm/v/expect-dom.svg?style=flat-square)](https://www.npmjs.org/package/expect-dom)

[expect-dom](https://github.com/mjackson/expect-dom) is an extension to [expect](https://github.com/mjackson/expect) that lets you write assertions for DOM nodes.

## Installation

Using [npm](https://www.npmjs.org/):

    $ npm install expect expect-dom

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using an ES6 transpiler, like babel
import expect from 'expect'
import expectDOM from 'expect-dom'
expect.extend(expectDOM)

// not using an ES6 transpiler
var expect = require('expect')
var expectDOM = require('expect-dom')
expect.extend(expectDOM)
```

There is a UMD build in the npm package in the `umd` directory. Use it like:

```js
var expect = require('expect-dom/umd/expect-dom.min')
```

## Assertions

### toHaveAttribute

> `expect(node).toHaveAttribute(name, [value, [message]])`

Asserts the given DOM `node` has an attribute with the given `name`. If `value` is given, asserts the value of the attribute as well.

```js
expect(node).toHaveAttribute('id')
expect(node).toHaveAttribute('id', 'an-id')
```

### toNotHaveAttribute

> `expect(object).toNotHaveAttribute(name, [value, [message]])`

Asserts the given DOM `node` does not have an attribute with the given `name`. If `value` is given, asserts the value of the attribute as well.

```js
expect(node).toNotHaveAttribute('id')
expect(node).toNotHaveAttribute('id', 'an-id')
```

### toHaveAttributes

> `expect(node).toHaveAttribute(attributes, [message])`

Asserts the given DOM `node` has attributes with the names and values in `attributes`.

```js
expect(node).toHaveAttributes({
  id: 'an-id',
  'class': 'a-class'
})
```

### toNotHaveAttributes

> `expect(node).toNotHaveAttribute(attributes, [message])`

Asserts the given DOM `node` does not have attributes with the names and values in `attributes`.

```js
expect(node).toNotHaveAttributes({
  id: 'an-id',
  'class': 'a-class'
})
```

### toHaveText

> `expect(node).toHaveText(text, [message])`

Asserts the `textContent` of the given DOM `node` is `text`.

```js
expect(node).toHaveText('hello world')
```

### toNotHaveText

> `expect(node).toNotHaveText(text, [message])`

Asserts the `textContent` of the given DOM `node` is not `text`.

```js
expect(node).toNotHaveText('hello world')
```

## Issues

Please file issues on the [issue tracker on GitHub](https://github.com/mjackson/expect-dom/issues).
