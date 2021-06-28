import { Row, Col } from 'antd'
import CardEvent from 'components/elements/card-event/cardEvent'
import Fallback from 'components/elements/fallback/fallback'

function TicketList(props) {
  const { data } = props

  return (
    <>
      <Row gutter={16}>
        {
          !data &&
          <Fallback title='No tickets right now' />
        }
        {
          data?.map(c => 
            <Col sm={12} lg={8} key={c.id}>
              <CardEvent event={c} />
            </Col>
          )
        }
      </Row>
    </>
  )
}

export default TicketList