import expect from 'expect'
import expectDOM from '../index'

describe('toNotHaveAttribute', () => {
  before(() => {
    expect.extend(expectDOM)
  })

  let node
  beforeEach(() => {
    node = document.createElement('div')
    node.setAttribute('id', 'the-id')
  })

  it('throws when the actual value is not a DOM node', () => {
    expect(() => {
      expect('string').toHaveAttribute('id')
    }).toThrow('must be a DOM node')
  })

  it('throws when an element has a given attribute', () => {
    expect(() => {
      expect(node).toNotHaveAttribute('id')
    }).toThrow("to not have a 'id' attribute")
  })

  it('throws when an element has a given attribute with a given value', () => {
    expect(() => {
      expect(node).toNotHaveAttribute('id', 'the-id')
    }).toThrow("to not have a 'id' attribute of 'the-id'")
  })

  it('does not throw when an element does not have a given attribute', () => {
    expect(() => {
      expect(node).toNotHaveAttribute('class')
    }).toNotThrow()
  })

  it('does not throw when an element does not have a given attribute with a given value', () => {
    expect(() => {
      expect(node).toNotHaveAttribute('id', 'not-the-id')
    }).toNotThrow()
  })
})
