// function to get nested object key
const getDescendantProp = (obj, path) => (
  path.split('.').reduce(( p, c ) => p && p[c] || null, obj)
)

// function for search filter by text in objects
const filterByText = (arr, key, filter) => {
  let data = []
  let search = filter.toUpperCase().trim()
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      const text = getDescendantProp(arr[i], key)
      if (text.toUpperCase().indexOf(search) > -1) {
        data = [
          ...data,
          arr[i]
        ]
      }
    }
  }
  return data
}

// function for search filter multiple key of objects. ex: (title, name, etc)
const filterMultiple = (arr, keys, filter) => {
  let data = []
  if (arr) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data = [
        ...data,
        ...filterByText(arr, key, filter)
      ]
    }
  }
  return uniqArray(data)
}

// function filter uniq function
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}

const uniqArray = arr => {
  return arr.filter(onlyUnique)
}

export {
  filterByText,
  filterMultiple,
  uniqArray
}