import { Row, Col } from 'antd'
import TitleSection from 'components/elements/title-section/titleSection'
import CardEvent from 'components/elements/card-event/cardEvent'
import Fallback from 'components/elements/fallback/fallback'
import FilterEvent from 'components/elements/filter-event/filterEvent'
import cx from 'classnames'
// import { useGetEvents } from 'modules/events/get-events'
import s from './event.module.less'

function EventListWrapper(props) {
  const { dataEvents, error } = props
  // const { data: dataEvents, error } = useGetEvents()
  
  return (
    <div className={cx(s.eventListWrapper, 'eventListWrapper')}>
      <TitleSection title='Upcoming Discovery' />

      <FilterEvent />

      <div className={s.cardEventWrapper}>
        <Row gutter={16}>
          {
            (!dataEvents || dataEvents.length === 0) &&
            <Fallback title='No events right now' />
          }
          {
            !dataEvents && !error &&
            <Fallback title='Loading...' />
          }
          {
            dataEvents?.map(c => 
              <Col xs={24} sm={12} lg={6} key={c.id}>
                <CardEvent 
                  dataEvent={c} 
                  loading={!dataEvents && !error}
                />
              </Col>
            )
          }
        </Row>
      </div>
    </div>
  )
}

export default EventListWrapper