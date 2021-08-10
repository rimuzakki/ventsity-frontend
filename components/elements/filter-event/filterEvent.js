import { useState } from 'react'
import { DatePicker, Select } from 'antd'
import { useGetCategories } from 'modules/categories/get-categories'
import Router from 'next/router'
import Context from 'libs/context/context'
import cx from 'classnames'
import s from './filterEvent.module.less'

const { Option } = Select

function FilterEvent() {
  const { data: dataCategories, error } = useGetCategories()
  const [ datePickerValue, setDatePickerValue ] = useState()

  const { 
    filterDateValue, setFilterDateValue,
    filterTypeValue, setFilterTypeValue,
    filterCategoryValue, setFilterCategoryValue
  } = Context.useContainer()

  // console.log('category', filterCategoryValue)


  const onChangeFilterDate = (date, dateString) => {
    const dateStringValue = dateString === '' ? null : dateString
    // console.log(date, dateString, dateStringValue)
    setDatePickerValue(date)
    setFilterDateValue(dateStringValue)
  }

  const onChangeFilterType = (value) => {
    setFilterTypeValue(value)
  }

  const onChangeFilterCategory = (value) => {
    setFilterCategoryValue(value)
  }

  const handleResetFilters = () => {
    Router.push({
      pathname: '/events',
      // query: { category: null },
    })
    setFilterDateValue(null)
    setFilterTypeValue(null)
    setFilterCategoryValue(null)
  }

  const dateFormat = 'YYYY-MM-DD'

  return (
    <div className={cx('flex align-items-center filterEventWrapper', s.filterEventWrapper)}>
      <div className={s.filterDate}>
        <label>Date : </label>
        <DatePicker bordered={false} onChange={onChangeFilterDate} value={datePickerValue} format={dateFormat} placeholder='Any Day' />
      </div>
      <div className={s.filterType}>
        <label>Type : </label>
        <Select value={filterTypeValue} onChange={onChangeFilterType} style={{ minWidth: 120 }} bordered={false}>
          <Option value={null}>Any type</Option>
          <Option value={true}>Online</Option>
          <Option value={false}>Offline</Option>
        </Select>
      </div>
      <div className={s.filterCategory}>
        <label>Category : </label>
        <Select value={filterCategoryValue} onChange={onChangeFilterCategory} style={{ minWidth: 120 }} bordered={false}>
          <Option value={null}>Any type</Option>
          {
            dataCategories?.map(c =>
              <Option key={c.id} value={c.slug}>{c.name}</Option>
            )
          }
        </Select>
      </div>
      {
        (filterDateValue !== null || filterTypeValue !== null || filterCategoryValue !== null) &&
        <div className={s.resetFilter}>
          <a onClick={handleResetFilters}>Reset filters</a> 
        </div>
      }
    </div>
  )
}

export default FilterEvent