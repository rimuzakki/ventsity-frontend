import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import MyEventList from './myEventList'
import { Row, Col, Tabs, Button } from 'antd'
import cx from 'classnames'

const { TabPane } = Tabs

function MyEventWrapper(props) {
  const { ongoingEventData, pastEventData, ongoingLoading, ongoingPast } = props

  const callback = (key) => {
    console.log(key)
  }

  return (
    <>
      <Container>
        <TitleSection title='My Events' />

        <Row>
          {/* <Col span={24} className='flex justify-content-end'>
            <Button type='primary' style={{ marginBottom: 16 }}>
              Find Events
            </Button>
          </Col> */}
          <Col span={24}>
            <div className={cx('tabWhiteWrapper')}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Ongoing Events" key="1">
                  <MyEventList
                    data={ongoingEventData}
                    loading={ongoingLoading}
                  />
                </TabPane>
                <TabPane tab="Past Events" key="2">
                  <MyEventList 
                    data={pastEventData}
                    loading={ongoingPast}
                  />
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyEventWrapper