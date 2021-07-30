import { Row, Col } from 'antd'
import CardEvent from 'components/elements/card-event/cardEvent'
import Fallback from 'components/elements/fallback/fallback'

function MyEventList(props) {
  const { data, loading } = props

  return (
    <>
      <Row gutter={16}>
        {
          (!data || data.length === 0) &&
          <Fallback title={`You have no event yet`} />
        }
        {
          loading &&
          <Fallback title={`Loading...`} />
        }
        {
          data?.map(c => 
            <Col xs={24} sm={12} lg={8} key={c.id}>
              <CardEvent 
                dataEvent={c} 
                loading={loading}
              />
            </Col>
          )
        }
      </Row>
    </>
  )
}

export default MyEventList