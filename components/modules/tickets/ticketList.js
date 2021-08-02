import { Row, Col } from 'antd'
import CardEvent from 'components/elements/card-event/cardEvent'
import Fallback from 'components/elements/fallback/fallback'

function TicketList(props) {
  const { data, loading } = props

  return (
    <>
      <Row gutter={16}>
        {
          (!data || data.length === 0) &&
          <Fallback title={`You have no ticket yet`} />
        }
        {
          loading &&
          <Fallback title={`Loading...`} />
        }
        {
          data?.map(c => 
            <Col sm={12} lg={8} key={c.id}>
              <CardEvent 
                dataEvent={c.event}
                ticketId={c.ticketId} 
              />
            </Col>
          )
        }
      </Row>
    </>
  )
}

export default TicketList