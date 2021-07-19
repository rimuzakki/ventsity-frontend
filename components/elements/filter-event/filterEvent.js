import { useState } from 'react'
import { DatePicker, Select } from 'antd'
import { useGetCategories } from 'modules/categories/get-categories'
import cx from 'classnames'
import s from './filterEvent.module.less'

const { Option } = Select

function FilterEvent() {
  const { data: dataCategories, error } = useGetCategories()

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
          {
            dataCategories?.map(c =>
              <Option value={c.slug}>{c.name}</Option>
            )
          }
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