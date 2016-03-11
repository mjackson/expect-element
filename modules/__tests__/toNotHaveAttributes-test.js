import expect from 'expect'
import expectDOM from '../index'

describe('toNotHaveAttributes', () => {
  before(() => {
    expect.extend(expectDOM)
  })

  let node
  beforeEach(() => {
    node = document.createElement('div')
    node.setAttribute('id', 'the-id')
    node.setAttribute('class', 'the-class')
  })

  it('throws when the actual value is not a DOM node', () => {
    expect(() => {
      expect('string').toNotHaveAttributes({})
    }).toThrow('must be a DOM node')
  })

  it('throws when an element has the given attributes', () => {
    expect(() => {
      expect(node).toNotHaveAttributes({
        id: 'the-id',
        class: 'the-class'
      })
    }).toThrow("to not have a 'id' attribute")
  })

  it('does not throw when an element does not have the given attributes', () => {
    expect(() => {
      expect(node).toNotHaveAttributes({
        id: 'not-the-id',
        class: 'not-the-class'
      })
    }).toNotThrow()
  })
})
