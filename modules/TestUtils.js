/**
 * Returns true if the given object is a DOM node.
 */
export const isDOMNode = (object) =>
  object && typeof object.nodeType === 'number'
