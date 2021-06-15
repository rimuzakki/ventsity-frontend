import { Typography, Tag } from 'antd'
import { VideoCameraOutlined } from '@ant-design/icons'
import moment from 'moment'
import cx from 'classnames'
import s from './cardEvent.module.less'

const { Text, Paragraph } = Typography

function CardEvent(props) {
  const { event } = props
  
  return (
    <div className={cx(s.cardEvent, 'cardEvent flex flex-column')}>
      <div className={s.cardEventImage}>
        <img src={event.cover_image} alt={event.title} />
        {
          event.type_event === 'online' &&
          <Tag className={s.tagEvent}><VideoCameraOutlined style={{ marginRight: 4 }} /> Online event</Tag>
        }
      </div>
      <div className={cx(s.cardEventContent, 'h-full')}>
        <div className={s.dateTimeEvent}>
          <Text>
            {moment(event.date_start).format('ddd, D MMM')}
            {`, `}
            {moment(event.time_start, 'H:mm').format('H:mm')}
          </Text>
        </div>
        <div className='flex flex-column justify-content-between h-full'>
          <div className={s.titleEvent}>
            <Paragraph 
              ellipsis={
                {
                  rows: 2,
                  tooltip: event.title,
                }
              }
            >
              {event.title}
            </Paragraph>
          </div>
          <div className={s.organizerEvent}>
            <Text>{event.created_by}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEvent