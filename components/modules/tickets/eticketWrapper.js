import { Row, Col, Button } from 'antd'
import moment from 'moment'
import Container from 'components/elements/container/container'
import cx from 'classnames'
import s from './eticket.module.less'

function EticketWrapper(props) {
  const { dataTicket } = props
  const data = dataTicket && dataTicket[0]
  const event = data.event
  // console.log('dataTicket', data)

  return (
    <>
      <Container>
        <Row justify='center'>
          <Col xs={24} md={18} lg={12}>
            <div className={cx('cardWrapper', s.ticketWrapper)} style={{ marginTop: 40 }}>
              <div className={s.title}>
                <label>Ticket Number</label>
                <h3>{data.ticketId}</h3>
                {
                  event.isOnlineEvent ? 
                  <a
                    href={event.onlineUrl} target='_blank' 
                    className='ant-btn ant-btn-primary' style={{ marginTop: 16 }}
                  >
                    Join Event
                  </a>
                  :
                    event.locationUrl &&
                    <a
                      href={event.locationUrl} target='_blank' 
                      className='ant-btn ant-btn-primary' style={{ marginTop: 16 }}
                    >
                      Get Directions
                    </a>
                }
              </div>
              <div className={s.detail}>
                <div className={s.itemDetail}>
                  <label>Attendee</label>
                  <p>{data.user.fullName}</p>
                </div>
                <div className={s.itemDetail}>
                  <label>Schedule</label>
                  <p>
                    {moment(event.dateStart).format('dddd, D MMMM YYYY')} 
                    {event.dateStart !== event.dateEnd && ` - ${moment(event.dateEnd).format('dddd, D MMMM YYYY')}`}
                  </p>
                  <p>
                    {moment(event.timeStart, 'H:mm').format('H:mm')} - {moment(event.timeEnd, 'H:mm').format('H:mm')}
                  </p>
                </div>
                <div className={s.itemDetail}>
                  <label>Title</label>
                  <p>{event.title}</p>
                </div>
                <div className={s.itemDetail}>
                  <label>Event Location</label>
                  {
                    event.isOnlineEvent ? 
                    <p>Online : <a href={event.onlineUrl} target='_blank'>{event.onlineUrl}</a></p>
                    :
                    <>
                      <p>{event.locationName}</p>
                      <p>{event.locationAddress}</p>
                      <p>
                        <a href={event.locationUrl} target='_blank'>{event.locationUrl}</a>
                      </p>
                    </>
                  }
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EticketWrapper