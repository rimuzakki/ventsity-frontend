import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import TicketList from './ticketList'
import { Row, Col, Tabs, Button } from 'antd'
import cx from 'classnames'
import s from './ticket.module.less'

const { TabPane } = Tabs

function TicketWrapper(props) {

  const { recentTicketData, pastTicketData, recentLoading, pastLoading } = props

  const callback = (key) => {
    console.log(key)
  }

  return (
    <>
      <Container>
        <TitleSection title='My Tickets' />

        <Row>
          <Col span={24} className='flex justify-content-end'>
            <Button type='primary' style={{ marginBottom: 16 }}>
              Find Events
            </Button>
          </Col>
          <Col span={24}>
            <div className={cx('tabWhiteWrapper', s.tabWrapper)}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Recent Ticket" key="1">
                  <TicketList
                    data={recentTicketData}
                    loading={recentLoading}
                  />
                </TabPane>
                <TabPane tab="Past Ticket" key="2">
                  <TicketList 
                    data={pastTicketData}
                    loading={pastLoading}
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

export default TicketWrapper