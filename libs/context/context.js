import { createContainer } from 'unstated-next'
import { useState } from 'react'

const Context = createContainer(() => {
  const [ filterDateValue, setFilterDateValue ] = useState(null)
  const [ filterTypeValue, setFilterTypeValue ] = useState(null)
  const [ filterCategoryValue, setFilterCategoryValue ] = useState(null)
  const [ eventData, setEventData ] = useState(null)

  return {
    filterDateValue, setFilterDateValue,

    filterTypeValue, setFilterTypeValue,

    filterCategoryValue, setFilterCategoryValue,

    eventData, setEventData
  }
})

export default Context