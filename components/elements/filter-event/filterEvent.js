import { useState } from 'react'
import { DatePicker, Select } from 'antd'
import cx from 'classnames'
import s from './filterEvent.module.less'

const { Option } = Select

function FilterEvent() {

  const [ filterDateValue, setFilterDateValue ] = useState(null)
  const [ filterTypeValue, setFilterTypeValue ] = useState('anytype')
  const [ filterCategoryValue, setFilterCategoryValue ] = useState('anycategory')

  const onChangeFilterDate = (date, dateString) => {
    console.log(date, dateString)
    setFilterDateValue(date)
  }

  const onChangeFilterType = (value) => {
    setFilterTypeValue(value)
  }

  const onChangeFilterCategory = (value) => {
    setFilterCategoryValue(value)
  }

  const handleResetFilters = () => {
    setFilterDateValue(null)
    setFilterTypeValue('anytype')
    setFilterCategoryValue('anycategory')
  }

  const dateFormat = 'DD/MM/YYYY'

  return (
    <div className={cx('flex align-items-center filterEventWrapper', s.filterEventWrapper)}>
      <div className={s.filterDate}>
        <label>Date : </label>
        <DatePicker bordered={false} onChange={onChangeFilterDate} value={filterDateValue} format={dateFormat} placeholder='Any Day' />
      </div>
      <div className={s.filterType}>
        <label>Type : </label>
        <Select value={filterTypeValue} onChange={onChangeFilterType} style={{ minWidth: 120 }} bordered={false}>
          <Option value="anytype">Any type</Option>
          <Option value="online">Online</Option>
          <Option value="offline">Offline</Option>
        </Select>
      </div>
      <div className={s.filterCategory}>
        <label>Category : </label>
        <Select value={filterCategoryValue} onChange={onChangeFilterCategory} style={{ minWidth: 120 }} bordered={false}>
          <Option value="anycategory">Any type</Option>
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
          <Option value="category3">Category 3</Option>
        </Select>
      </div>
      {
        (filterDateValue !== null || filterTypeValue !== 'anytype' || filterCategoryValue !== 'anycategory') &&
        <div className={s.resetFilter}>
          <a onClick={handleResetFilters}>Reset filters</a> 
        </div>
      }
    </div>
  )
}

export default FilterEvent