import camelCase from 'lodash.camelcase'
import kebabCase from 'lodash.kebabcase'
import upperFirst from 'lodash.upperfirst'
import words from 'lodash.words'

export function convertProperty(attr) {
  return words(attr)
    .map(upperFirst)
    .join(' ')
}

export function propertyCasing(property, casing) {
  switch (casing) {
    case 'camel':
      return camelCase(property)
    case 'kebab':
      return kebabCase(property)
    default:
      return property
  }
}

function transformSizeValue(val) {
  if (typeof val === 'number') {
    return `${val}px`
  }
  return val
}

function splitSizeStr(str = '') {
  return transformSizeValue(str)
    .split(/(\d+)/)
    .filter(Boolean)
    .map(str => (!isNaN(Number(str)) ? Number(str) : str))
}

export function transformSizeInput(str) {
  const [value, unit] = splitSizeStr(str)
  if (!isNaN(Number(value))) {
    return [value, unit]
  }
  return []
}

export function devError(...args) {
  if (process.env.NODE_ENV !== 'production') {
    console.error('CSS Editor:', ...args)
  }
}

export function devLog(...args) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('CSS Editor:', ...args)
  }
}
