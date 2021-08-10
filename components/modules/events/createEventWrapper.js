import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import BasicInfoForm from './create-form/basicInfoForm'
import ImageEventForm from './create-form/imageEventForm'
import LocationEventForm from './create-form/locationEventForm'
import DateTimeForm from './create-form/dateTimeForm'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import {Link} from 'react-scroll'
import { Row, Col, Form, Button, message } from 'antd'
import { mutate } from 'swr'
import axios from 'axios'
import moment from 'moment'
import Context from 'libs/context/context'
import { ProfileOutlined, PictureOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons'
import cx from 'classnames'
import s from './createEventWrapper.module.less'

function CreateEventWrapper(props) {
  const { dataEvent, loading: loadingEvent } = props
  const { 
    eventData
  } = Context.useContainer()
  // const data = eventData && eventData[0]
  const data = dataEvent && dataEvent[0]
  console.log(data)

  const [ session, loading ] = useSession()

  const [loadingData, setLoadingData] = useState(false)
  const [form] = Form.useForm()

  const dateFormat = 'YYYY-MM-DD'
  const timeFormat = 'HH:mm:ss.SSS'

  const onCreate = (formData) => {
    // console.log('onCreate')
    setLoadingData(true)
    axios.post(`events`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(result => {
      // console.log('res', result)
      message.success({
        content: 'Event successfully created',
        style: {
          marginTop: 150,
        },
      })
    })
    .catch(err => {
      console.log('err', err)
      message.error({
        content: 'Failed when saving data, try again later!',
        style: {
          marginTop: 150,
        },
      })
    })
    setLoadingData(false)
  }

  const onUpdate = (formData) => {
    // console.log('onUpdate')
    const eventId = data.id
    setLoadingData(true)
    axios.put(`events/${eventId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(result => {
      // console.log('res', result)
      mutate(`/events/${eventId}`)
      message.success({
        content: 'Event successfully udpated',
        style: {
          marginTop: 150,
        },
      })
    })
    .catch(err => {
      console.log('err', err)
      message.success({
        content: 'Failed when updating data, try again later!',
        style: {
          marginTop: 150,
        },
      })
    })
    setLoadingData(false)
  }

  useEffect(() => {
    if(data) {
      // const dateStart = moment(data.dateStart).format(dateFormat)
      // const dateEnd = moment(data.dateEnd).format(dateFormat)
      // const timeStart = moment(data.timeStart).format('HH:mm')
      // const timeEnd = moment(data.timeEnd).format('HH:mm')

      form.setFieldsValue({
        eventTitle: data.title,
        eventCategory: data.category.id,
        eventDescription: data.description,
        eventContactPerson: data.contactPerson,
        eventParticipant: data.limitAttendees,
        switchOnlineEvent: data.isOnlineEvent,
        eventPlaceName: data.locationName,
        eventAddress: data.locationAddress,
        eventPlaceUrl: data.locationUrl,
        eventStreamUrl: data.onlineUrl,
        dateStart: moment(data.dateStart),
        dateEnd: moment(data.dateEnd),
        timeStart: moment(data.timeStart, 'HH:mm'),
        timeEnd: moment(data.timeEnd, 'HH:mm'),
      })
    }
  }, [data])

  const onFinish = (values, status) => {
    // console.log('Success:', values)
    // console.log('status:', status)
    const dateStart = moment(values.dateStart).format(dateFormat)
    const dateEnd = moment(values.dateEnd).format(dateFormat)
    const timeStart = moment(values.timeStart).format(timeFormat)
    const timeEnd = moment(values.timeEnd).format(timeFormat)
    const isOnlineEvent = values.eventStreamUrl ? true : false

    const dataForm = { 
      title: values.eventTitle,
      category: {
        id: values.eventCategory
      },
      description: values.eventDescription,
      contactPerson: values.eventContactPerson,
      limitAttendees: values.eventParticipant,
      isOnlineEvent: isOnlineEvent,
      locationName: values.eventPlaceName ? values.eventPlaceName : null,
      locationAddress: values.eventAddress ? values.eventAddress : null,
      locationUrl: values.eventPlaceUrl ? values.eventPlaceUrl : null,
      onlineUrl: values.eventStreamUrl ? values.eventStreamUrl : null,
      dateStart: dateStart,
      dateEnd: dateEnd,
      timeStart: timeStart,
      timeEnd: timeEnd,
      status: status,
      creator: {
        id: session.id
      },
    }

    const image = values.imageEvent && values.imageEvent[0]
    const formData = new FormData();
    if (image) {
      formData.append('files.cover', image.originFileObj)
      formData.append('data', JSON.stringify(dataForm))
    } else {
      formData.append('data', JSON.stringify(dataForm))
    }
    // console.log('frm', formData)

    if (data && data.id) {
      onUpdate(formData)
    } else {
      onCreate(formData)
    }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  };

  const onSaveForm = (status) => {
    form
      .validateFields()
      .then((values) => {
        // form.resetFields();
        onFinish(values, status);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }

  return (
    <>
      <Container>
        <TitleSection title='Create Event' />
        
        <Row justify='center'>
          <Col xs={24} md={24} lg={22}>
            <div className='cardWrapper'>
              <Row>
                <Col xs={24} md={6}>
                  <div className={s.navigation}>
                    <ul>
                      <li>
                        <Link activeClass={s.active} to="basicInfoSection" spy={true} smooth={true} offset={-100}>
                          Basic Info
                        </Link>
                      </li>
                      <li>
                        <Link activeClass={s.active} to="imageEventSection" spy={true} smooth={true} offset={-100}>
                          Image Event
                        </Link>
                      </li>
                      <li>
                        <Link activeClass={s.active} to="locationSection" spy={true} smooth={true} offset={-100}>
                          Location
                        </Link>
                      </li>
                      <li>
                        <Link activeClass={s.active} to="dateTimeSection" spy={true} smooth={true} offset={-100}>
                          Date and Time
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={10}>
                  <Form
                    form={form}
                    name='formCreateEvent'
                    layout='vertical'
                    requiredMark={false}
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <div id='basicInfoSection' className={s.sectionForm}>
                      <div className={cx('flex', s.formTitle)}>
                        <ProfileOutlined />
                        <h3>Basic Info</h3>
                      </div>
                      <BasicInfoForm />
                    </div>
                    <div id='imageEventSection' className={s.sectionForm}>
                      <div className={cx('flex', s.formTitle)}>
                        <PictureOutlined />
                        <h3>Image Event</h3>
                      </div>
                      <ImageEventForm
                        image={data?.cover.url}
                      />
                    </div>
                    <div id='locationSection' className={s.sectionForm}>
                      <div className={cx('flex', s.formTitle)}>
                        <EnvironmentOutlined />
                        <h3>Location</h3>
                      </div>
                      <LocationEventForm 
                        isOnlineEvent={data?.isOnlineEvent}
                      />
                    </div>
                    <div id='dateTimeSection' className={s.sectionForm}>
                      <div className={cx('flex', s.formTitle)}>
                        <CalendarOutlined />
                        <h3>Date and Time</h3>
                      </div>
                      <DateTimeForm />
                    </div>
                  </Form>
                </Col>
              </Row>
              <Row gutter={16} justify='end'>
                {
                  data?.status === 'published' ?
                  <>
                    <Col xs={24} md={4}>
                      <Button onClick={() => onSaveForm('draft')} block>
                        Save to draft
                      </Button>
                    </Col>
                    <Col xs={24} md={4}>
                      <Button type='primary' onClick={() => onSaveForm('published')} block>
                        Save and publish
                      </Button>
                    </Col>
                  </>
                  :
                  <>
                    <Col xs={24} md={4}>
                      <Button onClick={() => onSaveForm('draft')} block>
                        Save, Publish later
                      </Button>
                    </Col>
                    <Col xs={24} md={4}>
                      <Button type='primary' onClick={() => onSaveForm('published')} block>
                        Publish Now
                      </Button>
                    </Col>
                  </>
                }
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateEventWrapper