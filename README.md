# expect-element [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/mjackson/expect-element/master.svg?style=flat-square
[build]: https://travis-ci.org/mjackson/expect-element

[npm-badge]: https://img.shields.io/npm/v/expect-element.svg?style=flat-square
[npm]: https://www.npmjs.org/package/expect-element

[expect-element](https://github.com/mjackson/expect-element) is an extension for [expect](https://github.com/mjackson/expect) that lets you write better assertions for DOM nodes.

## Installation

Using [npm](https://www.npmjs.org/):

    $ npm install --save expect expect-element

Then, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import expect from 'expect'
import expectElement from 'expect-element'
expect.extend(expectElement)

// not using an ES6 transpiler
var expect = require('expect')
var expectElement = require('expect-element')
expect.extend(expectElement)
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
<script src="https://npmcdn.com/expect-element/umd/expect-element.min.js"></script>
```

You can find the library on `window.expectElement`.

## Assertions

### toHaveAttribute

> `expect(element).toHaveAttribute(name, [value, [message]])`

Asserts the given DOM `element` has an attribute with the given `name`. If `value` is given, asserts the value of the attribute as well.

```js
expect(element).toHaveAttribute('id')
expect(element).toHaveAttribute('id', 'an-id')
```

### toNotHaveAttribute

> `expect(object).toNotHaveAttribute(name, [value, [message]])`

Asserts the given DOM `element` does not have an attribute with the given `name`. If `value` is given, asserts the value of the attribute as well.

```js
expect(element).toNotHaveAttribute('id')
expect(element).toNotHaveAttribute('id', 'an-id')
```

### toHaveAttributes

> `expect(element).toHaveAttribute(attributes, [message])`

Asserts the given DOM `element` has attributes with the names and values in `attributes`.

```js
expect(element).toHaveAttributes({
  id: 'an-id',
  'class': 'a-class'
})
```

### toNotHaveAttributes

> `expect(element).toNotHaveAttribute(attributes, [message])`

Asserts the given DOM `element` does not have attributes with the names and values in `attributes`.

```js
expect(element).toNotHaveAttributes({
  id: 'an-id',
  'class': 'a-class'
})
```

### toHaveText

> `expect(element).toHaveText(text, [message])`

Asserts the `textContent` of the given DOM `element` is `text`.

```js
expect(element).toHaveText('hello world')
```

### toNotHaveText

> `expect(element).toNotHaveText(text, [message])`

Asserts the `textContent` of the given DOM `element` is not `text`.

```js
expect(element).toNotHaveText('hello world')
```
