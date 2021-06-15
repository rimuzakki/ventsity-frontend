import { Row, Col, Input, Button } from 'antd'
import cx from 'classnames'
import s from './search.module.less'


function Search() {
  return (
    <div className={s.searchWrapper}>
      <Row gutter={32}>
        <Col xs={24} md={20}>
          <Input placeholder="Find your event" />
        </Col>
        <Col xs={24} md={4}>
          <Button className={s.btnSearch}>Search</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Search