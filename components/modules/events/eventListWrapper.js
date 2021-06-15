import { Row, Col, Button } from 'antd'
import TitleSection from 'components/elements/title-section/titleSection'
import CardEvent from 'components/elements/card-event/cardEvent'
import Fallback from 'components/elements/fallback/fallback'
import FilterEvent from 'components/elements/filter-event/filterEvent'
import cx from 'classnames'
import s from './event.module.less'

function EventListWrapper(props) {
  const { data } = props
  return (
    <div className={cx(s.eventListWrapper, 'eventListWrapper')}>
      <TitleSection title='Upcoming Discovery' />

      <FilterEvent />

      <div className={s.cardEventWrapper}>
        <Row gutter={16}>
          {
            !data &&
            <Fallback title='No events right now' />
          }
          {
            data?.map(c => 
              <Col sm={12} lg={6} key={c.id}>
                <CardEvent event={c} />
              </Col>
            )
          }
        </Row>
      </div>

      <div className='flex justify-content-center align-items-center' style={{ marginTop: 64 }}>
        <Button>Load more</Button>
      </div>
    </div>
  )
}

export default EventListWrapper