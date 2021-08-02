import { Typography, Tag } from 'antd'
import { VideoCameraOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Skeleton from 'components/elements/skeleton/skeleton'
import moment from 'moment'
import cx from 'classnames'
import s from './cardEvent.module.less'
import config from 'config'

const { Text, Paragraph } = Typography

function CardEvent(props) {
  const { dataEvent, loading, showStatus, ticketId } = props

  const path = (dataEvent && dataEvent.cover) && dataEvent.cover.formats.small.url
  const coverThumbnailUrl = config.api_url + path
  // const createdBy = dataEvent.creator.fullName

  const viewLoading = () => {
    for(var i = 0; i < 8; i++) {
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
  }

  const viewMain = () => {
    return (
      <Link href={`/events/${dataEvent?.endUrl}`}>
        <a>
          <div className={cx(s.cardEvent, 'cardEvent flex flex-column')}>
            <div className={s.cardEventImage}>
              <img src={coverThumbnailUrl} alt={dataEvent.title} />
              {
                dataEvent.isOnlineEvent &&
                <Tag className={s.tagEvent}><VideoCameraOutlined style={{ marginRight: 4 }} /> Online event</Tag>
              }
            </div>
            <div className={cx(s.cardEventContent, 'h-full')}>
              <div className={s.dateTimeEvent}>
                <Text>
                  {moment(dataEvent.dateStart).format('ddd, D MMM')}
                  {`, `}
                  {moment(dataEvent.timeStart, 'H:mm').format('H:mm')}
                </Text>
                {
                  showStatus &&
                  <Tag color={dataEvent.status === 'draft' ? 'red' : 'green'} className={s.tagEvent}>{dataEvent.status}</Tag>
                }
              </div>
              {
                ticketId &&
                <div className={s.ticketId}>
                  <Text>
                    Ticket #{ticketId}
                  </Text>
                </div>
              }
              <div className='flex flex-column justify-content-between h-full'>
                <div className={s.titleEvent}>
                  <Paragraph 
                    ellipsis={
                      {
                        rows: 2,
                        tooltip: dataEvent.title,
                      }
                    }
                  >
                    {dataEvent.title}
                  </Paragraph>
                </div>
                <div className={s.organizerEvent}>
                  <Text>{dataEvent.creator?.fullName}</Text>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  }
  
  return (
    <>
    {
      loading ? 
      viewLoading() :
      viewMain()
    }
    </>
  )
}

export default CardEvent