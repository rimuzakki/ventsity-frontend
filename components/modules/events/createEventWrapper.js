import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import BasicInfoForm from './create-form/basicInfoForm'
import ImageEventForm from './create-form/imageEventForm'
import LocationEventForm from './create-form/locationEventForm'
import DateTimeForm from './create-form/dateTimeForm'
import {Link} from 'react-scroll'
import { Row, Col, Form, Button } from 'antd'
import moment from 'moment'
import { ProfileOutlined, PictureOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons'
import cx from 'classnames'
import s from './createEventWrapper.module.less'

function CreateEventWrapper() {
  const [form] = Form.useForm()

  const dateFormat = 'YYYY-MM-DD'
  const timeFormat = 'HH:mm'

  const onFinish = (values) => {
    console.log('Success:', values)
    console.log('DS:', moment(values.dateStart).format(dateFormat))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  };

  const onSaveForm = () => {
    form
      .validateFields()
      .then((values) => {
        // form.resetFields();
        onFinish(values);
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
          <Col span={22}>
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
                      <ImageEventForm />
                    </div>
                    <div id='locationSection' className={s.sectionForm}>
                      <div className={cx('flex', s.formTitle)}>
                        <EnvironmentOutlined />
                        <h3>Location</h3>
                      </div>
                      <LocationEventForm />
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
                <Col xs={24} md={4}>
                  <Button onClick={onSaveForm} block>
                    Save
                  </Button>
                </Col>
                <Col xs={24} md={4}>
                  <Button type='primary' onClick={onSaveForm} block>
                    Publish
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateEventWrapper