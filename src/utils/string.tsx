import {capitalize, forOwn, join, map, startCase, toLower} from 'lodash'

export const makeTitleCase = string => startCase(toLower(string))

export const capitalizeFirstLetter = string => capitalize(string)

export const objectToQueryString = obj => {
  const results = []
  forOwn(obj, (value, key) => {
    if (Array.isArray(value)) {
      forOwn(value, value => {
        results.push(`${key}=${value}`)
      })
    } else {
      results.push(`${key}=${value}`)
    }
  })
  return results.join('&')
}

export const stringifiedArray = (array, key = 'name') => {
  const itemArray = map(array, item => item?.[key])
  return join(itemArray, ', ')
}
