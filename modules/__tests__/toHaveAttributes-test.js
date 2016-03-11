import expect from 'expect'
import expectDOM from '../index'

describe('toHaveAttributes', () => {
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
      expect('string').toHaveAttributes({})
    }).toThrow('must be a DOM node')
  })

  it('does not throw when an element has the given attributes', () => {
    expect(() => {
      expect(node).toHaveAttributes({
        id: 'the-id',
        class: 'the-class'
      })
    }).toNotThrow()
  })

  it('throws when an element does not have the given attributes', () => {
    expect(() => {
      expect(node).toHaveAttributes({
        id: 'not-the-id',
        class: 'not-the-class'
      })
    }).toThrow()
  })
})
