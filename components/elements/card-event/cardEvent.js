import { Typography, Tag } from 'antd'
import { VideoCameraOutlined } from '@ant-design/icons'
import Skeleton from 'components/elements/skeleton/skeleton'
import moment from 'moment'
import cx from 'classnames'
import s from './cardEvent.module.less'

const { Text, Paragraph } = Typography

function CardEvent(props) {
  const { event, loading } = props

  const viewLoading = () => {
    return (
      <div className={cx(s.cardEvent, 'cardEvent flex flex-column')}>
        <div className={s.cardEventImage}>
          <Skeleton w='100%' h={150} r={4} />
        </div>
        <div className={cx(s.cardEventContent, 'h-full')}>
          <div className={s.dateTimeEvent}>
            <Skeleton w={125} h={20} r={4} />
          </div>
          <div className='flex flex-column justify-content-between h-full'>
            <div className={s.titleEvent}>
              <Skeleton w='100%' h={24} r={4} m='4px 0px' />
              <Skeleton w='50%' h={24} r={4} m='4px 0px' />
            </div>
            <div className={s.organizerEvent}>
              <Skeleton w='100%' h={24} r={4} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <>
    {
      loading ? 
      viewLoading() :
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
          {
            event.idTicket &&
            <div className={s.ticketId}>
              <Text>
                Ticket #{event.idTicket}
              </Text>
            </div>
          }
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
    
    }
    </>
  )
}

export default CardEvent