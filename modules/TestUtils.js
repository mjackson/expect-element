/**
 * Returns true if the given object is a DOM node.
 */
export function isDOMNode(object) {
  return object && typeof object.nodeType === 'number'
}
