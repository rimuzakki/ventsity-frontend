import Image from 'next/image'
import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import EventRegister from './eventRegister'
import ModalEventAttendees from 'components/modules/event-attendees/modalEventAttendees'
import { useState } from 'react'
import { Row, Col, Skeleton } from 'antd'
import config from 'config'
import cx from 'classnames'
import s from './eventDetail.module.less'

function EventDetail(props) {
  const [ isModalVisible, setIsModalVisible ] = useState(false)
  const { dataEvent, loading } = props
  const data = dataEvent && dataEvent[0]
  // console.log('dataEvent', data)

  const path = data.cover ? data.cover.url : null
  const coverUrl = path !== null ? config.api_url + path : 'http://localhost:3004/assets/image-placeholder.png'

  const handleOpenModalAttendees = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const viewLoading = () => {
    return (
      <>
        <Skeleton.Image active />
        <Skeleton active />
      </>
    )
  }

  return (
    <>
      <section className={cx('section', s.sectionEventDetail)}>
        <Container>
          <Row>
            <Col>
              <TitleSection title='Event Detail' />
            </Col>
          </Row>
          <Row gutter={32}>
            <Col sm={24} lg={12}>
              {
                loading ?
                viewLoading() :
                <>
                  <div className={s.imageEventWrapper}>
                    <Image 
                      className={s.imageEvent}
                      src={coverUrl}
                      alt="Card Image" 
                      layout='fill'
                      objectFit='cover' 
                      placeholder='blur'
                      // width={580} 
                      // height={390} 
                    />
                  </div>
                  <div className={s.descriptionWrapper}>
                    <h4 className={s.titleSection}>Description</h4>
                    <p>About this event : </p>
                    {data?.description}
                    <p style={{ marginTop: 40 }}>Contact person : </p>
                    {data?.contactPerson}
                  </div>
                </>
              }
            </Col>
            <Col sm={24} lg={12}>
              <EventRegister
                dataEvent={data}
                handleOpenModalAttendees={handleOpenModalAttendees}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {
        isModalVisible &&
        <ModalEventAttendees
          modalVisible={isModalVisible}
          handleOk={handleModalOk}
          handleCancel={handleModalCancel}
        />
      }
    </>
  )
}

export default EventDetail