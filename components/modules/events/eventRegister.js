import { Button, Skeleton } from 'antd'
import { useState } from 'react'
import cx from 'classnames'
import { ClockCircleOutlined, VideoCameraOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import s from './eventDetail.module.less'

function EventRegister() {
  const [ loading, setLoading ] = useState(false)

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
          <p className={s.eventType}>Online - Business</p>
          <h1>Langkah Mudah Memulai Digital Marketing</h1>
          <small>By Fakultas Teknologi Informasi</small>
          <div className={cx('flex flex-column', s.infoEvent)}>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <ClockCircleOutlined />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <p>Friday, 29 January 2021</p>
                <p>19:00 - 20:00</p>
              </div>
            </div>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <VideoCameraOutlined />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <p>Online event</p>
                <p>Link visible to attendees</p>
              </div>
            </div>
            <div className={cx('flex align-items-start', s.infoItem)}>
              <div className={s.infoIcon}>
                <UsergroupAddOutlined />
              </div>
              <div className={cx('flex flex-column', s.infoText)}>
                <p>29 of 40 attendees joined</p>
              </div>
            </div>
            <Button type="primary" block style={{ marginTop: 16 }}>REGISTER NOW</Button>
          </div>
        </div>
      }
    </>
  )
}

export default EventRegister