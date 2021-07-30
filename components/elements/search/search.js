import { useRouter } from 'next/router'
import { useState } from 'react'
import { Row, Col, Input, Button } from 'antd'
import cx from 'classnames'
import s from './search.module.less'

function Search() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    router.push(`/discover/${searchValue}`)
  }

  const handleChangeInput = (e) => {
    setSearchValue(e.target.value)
    console.log('va', e.target.value)
  }

  return (
    <div className={s.searchWrapper}>
      <Row gutter={32}>
        <Col xs={24} md={20}>
          <Input 
            placeholder="Find your event" 
            onChange={handleChangeInput}
            onPressEnter={handleSearch}
          />
        </Col>
        <Col xs={24} md={4}>
          <Button className={s.btnSearch} onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Search