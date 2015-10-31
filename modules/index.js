import { assert } from 'expect'
import { isDOMNode } from './TestUtils'

export function toHaveAttribute(name, value) {
  assert(
    isDOMNode(this.actual),
    'The "actual" argument in expect(actual).toHaveAttribute() must be a DOM node, %s was given',
    this.actual
  )

  if (value === undefined) {
    assert(
      this.actual.getAttribute(name),
      'Expected %s to have a %s attribute, but it did not',
      this.actual,
      name
    )
  } else {
    assert(
      this.actual.getAttribute(name) === value,
      'Expected %s to have a %s attribute of %s, but it was %s',
      this.actual,
      name,
      value,
      this.actual.getAttribute(name)
    )
  }
}

export function toHaveAttributes(attributes) {
  assert(
    isDOMNode(this.actual),
    'The "actual" argument in expect(actual).toHaveAttributes() must be a DOM node, %s was given',
    this.actual
  )

  for (const property in attributes)
    if (attributes.hasOwnProperty(property))
      toHaveAttribute.call(this, property, attributes[property])
}

export function toNotHaveAttribute(name, value) {
  assert(
    isDOMNode(this.actual),
    'The "actual" argument in expect(actual).toNotHaveAttribute() must be a DOM node, %s was given',
    this.actual
  )

  if (value === undefined) {
    assert(
      this.actual.getAttribute(name) == null,
      'Expected %s to not have a %s attribute, but it did',
      this.actual,
      name
    )
  } else {
    assert(
      this.actual.getAttribute(name) !== value,
      'Expected %s to not have a %s attribute of %s',
      this.actual,
      name,
      value
    )
  }
}

export function toNotHaveAttributes(attributes) {
  assert(
    isDOMNode(this.actual),
    'The "actual" argument in expect(actual).toNotHaveAttributes() must be a DOM node, %s was given',
    this.actual
  )

  for (const property in attributes)
    if (attributes.hasOwnProperty(property))
      toNotHaveAttribute.call(this, property, attributes[property])
}

export function toHaveText(text) {
  assert(
    isDOMNode(this.actual),
    'The "actual" argument in expect(actual).toHaveText() must be a DOM node, %s was given',
    this.actual
  )

  assert(
    this.actual.textContent === text,
    'Expected %s to have %s text, but had %s instead',
    this.actual,
    text,
    this.actual.textContent
  )
}

export function toNotHaveText(text) {
  assert(
    isDOMNode(this.actual),
    'The "actual" argument in expect(actual).toHaveText() must be a DOM node, %s was given',
    this.actual
  )

  assert(
    this.actual.textContent !== text,
    'Expected %s to not have %s text',
    this.actual,
    text
  )
}

export default {
  toHaveAttribute,
  toHaveAttributes,
  toNotHaveAttribute,
  toNotHaveAttributes,
  toHaveText,
  toNotHaveText
}
