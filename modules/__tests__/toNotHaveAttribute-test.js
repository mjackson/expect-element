/*eslint-env mocha */
import expect from 'expect'
import expectDOM from '../index'

describe('toNotHaveAttribute', function () {
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

  it('throws when an element has a given attribute', function () {
    expect(function () {
      expect(node).toNotHaveAttribute('id')
    }).toThrow("to not have a 'id' attribute")
  })

  it('throws when an element has a given attribute with a given value', function () {
    expect(function () {
      expect(node).toNotHaveAttribute('id', 'the-id')
    }).toThrow("to not have a 'id' attribute of 'the-id'")
  })

  it('does not throw when an element does not have a given attribute', function () {
    expect(function () {
      expect(node).toNotHaveAttribute('class')
    }).toNotThrow()
  })

  it('does not throw when an element does not have a given attribute with a given value', function () {
    expect(function () {
      expect(node).toNotHaveAttribute('id', 'not-the-id')
    }).toNotThrow()
  })
})
