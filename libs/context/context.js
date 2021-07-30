import { createContainer } from 'unstated-next'
import { useState } from 'react'

const Context = createContainer(() => {
  const [ filterDateValue, setFilterDateValue ] = useState(null)
  const [ filterTypeValue, setFilterTypeValue ] = useState(null)
  const [ filterCategoryValue, setFilterCategoryValue ] = useState(null)

  return {
    filterDateValue, setFilterDateValue,

    filterTypeValue, setFilterTypeValue,

    filterCategoryValue, setFilterCategoryValue
  }
})

export default Context