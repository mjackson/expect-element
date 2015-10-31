/*eslint-env mocha */
import expect from 'expect'
import expectDOM from '../index'

describe('toHaveAttribute', function () {
  before(function () {
    expect.extend(expectDOM)
  })

  let node
  beforeEach(function () {
    node = document.createElement('div')
    node.setAttribute('id', 'the-id')
  })

  it('throws when the actual value is not a DOM node', function () {
    expect(function () {
      expect('string').toHaveAttribute('id')
    }).toThrow('must be a DOM node')
  })

  it('does not throw when an element has a given attribute', function () {
    expect(function () {
      expect(node).toHaveAttribute('id')
    }).toNotThrow()
  })

  it('does not throw when an element has a given attribute with a given value', function () {
    expect(function () {
      expect(node).toHaveAttribute('id', 'the-id')
    }).toNotThrow()
  })

  it('throws when an element does not have a given attribute', function () {
    expect(function () {
      expect(node).toHaveAttribute('class')
    }).toThrow("to have a 'class' attribute")
  })

  it('throws when an element does not have a given attribute with a given value', function () {
    expect(function () {
      expect(node).toHaveAttribute('id', 'not-the-id')
    }).toThrow("to have a 'id' attribute of 'not-the-id'")
  })
})
