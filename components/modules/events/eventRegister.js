import { Button, Skeleton } from 'antd'
import { useState } from 'react'
import cx from 'classnames'
import moment from 'moment'
import { useSession } from 'next-auth/client'
import { ClockCircleOutlined, VideoCameraOutlined, UsergroupAddOutlined, EnvironmentOutlined } from '@ant-design/icons'
import s from './eventDetail.module.less'

function EventRegister(props) {
  const { dataEvent: data, handleOpenModalAttendees } = props
  const [ session, loadingSession ] = useSession()
  const [ loading, setLoading ] = useState(false)

  const tickets = data.tickets
  const isUserRegistered = tickets.find(c => c.user === session?.id)
  console.log('registered', isUserRegistered)

  const creator = data.creator
  const isCreator = creator.id === session?.id
  console.log('isCreator', isCreator)

  const viewLoading = () => {
    return (
      <>
        <div className={cx('flex flex-column', s.registerWrapper)}>
          <Skeleton.Input style={{ width: 200 }} size='small' active />
          <Skeleton.Input style={{ width: '100%' }} active />
          <Skeleton.Input style={{ width: 100 }} size='small' active />
          <div className={cx('flex flex-column', s.infoEvent)}>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <Skeleton.Avatar size='small' shape='circle' active />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <Skeleton.Input style={{ width: 200 }} size='small' active />
                <Skeleton.Input style={{ width: 150 }} size='small' active />
              </div>
            </div>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <Skeleton.Avatar size='small' shape='circle' active />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <Skeleton.Input style={{ width: 100 }} size='small' active />
                <Skeleton.Input style={{ width: 200 }} size='small' active />
              </div>
            </div>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <Skeleton.Avatar size='small' shape='circle' active />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <Skeleton.Input style={{ width: 200 }} size='small' active />
              </div>
            </div>
            <Skeleton.Button active style={{ width: '100%' }} size='small' />
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      {
        loading ?
        viewLoading() :
      
        <div className={cx('flex flex-column', s.registerWrapper)}>
          <p className={s.eventType}>
            {`${data.isOnlineEvent ? 'Online' : 'Offline'} - ${data.category.name}`}
          </p>
          <h1>
            {data.title}
          </h1>
          <small>
            {`By ${data.creator?.fullName}`}
          </small>
          <div className={cx('flex flex-column', s.infoEvent)}>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <ClockCircleOutlined />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <p>
                  {moment(data.dateStart).format('dddd, D MMMM YYYY')} 
                  {data.dateStart !== data.dateEnd && ` - ${moment(data.dateEnd).format('dddd, D MMMM YYYY')}`}
                </p>
                <p>
                  {moment(data.timeStart, 'H:mm').format('H:mm')} - {moment(data.timeEnd, 'H:mm').format('H:mm')}
                </p>
              </div>
            </div>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                {
                  data.isOnlineEvent ? 
                  <VideoCameraOutlined /> :
                  <EnvironmentOutlined />
                }
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                {
                  data.isOnlineEvent ? 
                  <>
                    {
                      isUserRegistered ?
                      <a target="_blank" href={data?.onlineUrl}>{data?.onlineUrl}</a>
                      :
                      <>
                        <p>Online event</p>
                        <p>Link visible to attendees</p>
                      </>
                    }
                    
                  </> 
                  :
                  <>
                    <p>{data?.locationName}</p>
                    <p>{data?.locationAddress}</p>
                    <a target="_blank" href={data?.locationUrl}>Location link</a>
                  </>
                }
              </div>
            </div>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <UsergroupAddOutlined />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <p>
                  {data.tickets.length} attendees joined
                </p>
              </div>
            </div>
            {
              isCreator ?
              <Button type="primary" block style={{ marginTop: 16 }} onClick={handleOpenModalAttendees}>See Attendees List</Button>
              :
              <Button type="primary" block style={{ marginTop: 16 }}>REGISTER NOW</Button>
            }
          </div>
        </div>
      }
    </>
  )
}

export default EventRegister