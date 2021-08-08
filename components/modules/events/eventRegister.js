import { Button, Skeleton, Modal } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import cx from 'classnames'
import moment from 'moment'
import axios from 'axios'
import { useSession } from 'next-auth/client'
import { ClockCircleOutlined, VideoCameraOutlined, UsergroupAddOutlined, EnvironmentOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import s from './eventDetail.module.less'

const { confirm } = Modal

function EventRegister(props) {
  const router = useRouter()

  const { dataEvent: data, handleOpenModalAttendees } = props
  const [ session, loadingSession ] = useSession()
  const [ loading, setLoading ] = useState(false)

  const tickets = data.tickets
  const isUserRegistered = tickets.find(c => c.user === session?.id)
  console.log('registered', isUserRegistered)

  const creator = data.creator
  const isCreator = creator.id === session?.id
  console.log('isCreator', isCreator)

  const handleRegisterSubmit = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    const randomCodeStr = randomCode.toString()

    const dataPost = {
      ticketId: randomCodeStr,
      event: {
        id: data.id
      },
      user: {
        id: session.id
      }
    }
    axios.post(`tickets`, dataPost)
    .then(result => {
      console.log('res', result)
      mutate(`events?endUrl=${data.endUrl}`)
    })
    .catch(err => {
      console.log('err', err)
    })
  }

  const viewRegisterConfirmation = () => {
    return (
      <>
        <label style={{ marginTop: 16, fontSize: 14, fontWeight: 'bold' }}>Event title : </label>
        <h4>
          <strong>
            {data.title}
          </strong>
        </h4>
        <label style={{ marginTop: 8, fontSize: 14, fontWeight: 'bold' }}>Event schedule : </label>
        <h4><strong>
          {moment(data.dateStart).format('dddd, D MMMM YYYY')} 
          {data.dateStart !== data.dateEnd && ` - ${moment(data.dateEnd).format('dddd, D MMMM YYYY')}`}
        </strong></h4>
        <h4><strong>
          {moment(data.timeStart, 'H:mm').format('H:mm')} - {moment(data.timeEnd, 'H:mm').format('H:mm')}
        </strong></h4>
      </>
    )
  }

  const showConfirm = () => {
    confirm({
      title: 'Do you want register for :',
      icon: <ExclamationCircleOutlined />,
      content: viewRegisterConfirmation(),
      okText: 'Register',
      cancelText: 'Cancel',
      onOk() {
        console.log('OK')
        handleRegisterSubmit()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const handleRegisterEvent = () => {
    session ?
      showConfirm()
    :
      router.push(`/api/auth/signin`)
  }

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
              isUserRegistered &&
              <>
                <p>You have registered for this event</p>
                <a
                  href={`/eticket/${isUserRegistered?.ticketId}`} target='_blank' 
                  className='ant-btn ant-btn-block' style={{ marginTop: 16 }}
                >E-Ticket</a>
              </>
            }
            {
              isCreator &&
              <a
                href={`/events/edit/${data.endUrl}`}
                className='ant-btn ant-btn-block' style={{ marginTop: 16 }}
              >Edit Event</a>
            }
            {
              (isCreator && data.tickets.length > 0) &&
              <Button type="primary" block style={{ marginTop: 16 }} onClick={handleOpenModalAttendees}>See Attendees List</Button>
            }
            {
              (!isCreator && !isUserRegistered) &&
              <Button
                type="primary" 
                block 
                style={{ marginTop: 16 }}
                onClick={handleRegisterEvent}
              >
                REGISTER NOW
              </Button>
            }
          </div>
        </div>
      }
    </>
  )
}

export default EventRegister