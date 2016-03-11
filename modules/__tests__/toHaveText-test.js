import expect from 'expect'
import expectDOM from '../index'

describe('toHaveText', () => {
  before(() => {
    expect.extend(expectDOM)
  })

  let node
  beforeEach(() => {
    node = document.createElement('div')
    node.appendChild(
      document.createTextNode('hello world')
    )
  })

  it('throws when the actual value is not a DOM node', () => {
    expect(() => {
      expect('string').toHaveText('')
    }).toThrow('must be a DOM node')
  })

  it('does not throw when an element has the given text', () => {
    expect(() => {
      expect(node).toHaveText('hello world')
    }).toNotThrow()
  })

  it('throws when an element does not have the given text', () => {
    expect(() => {
      expect(node).toHaveText('goodbye world')
    }).toThrow("to have 'goodbye world' text")
  })
})
