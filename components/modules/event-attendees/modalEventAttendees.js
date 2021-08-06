import React from 'react'
import { Modal, List, Skeleton, Button } from 'antd'
import { useGetTicketsByEvent } from 'modules/tickets/get-tickets-by-event'
import Context from 'libs/context/context'
import moment from 'moment'
import { CSVLink } from 'react-csv'

function ModalEventAttendees(props) {
  const { modalVisible, handleOk, handleCancel } = props

  const { 
    eventData
  } = Context.useContainer()

  const { data, error } = useGetTicketsByEvent(eventData[0].id)

  const formattedData = data?.map((c, i) => (
    {
      no: i,
      fullName: c.user.fullName,
      ticketNumber: c.ticketId,
      bookDate: moment(c.created_at).format('ddd, D MMM, YYYY')
    }
  ))


  const viewList = () => {
    return (
      <List
        className='list-attendees'
        loading={!data && !error}
        itemLayout='horizontal'
        // loadMore={loadMore}
        dataSource={data}
        renderItem={(item, key) => {
          return (
            <List.Item key={key}>
              <Skeleton title={false} loading={!data && !error} active>
                <div style={{ width: 30 }}>{key+1}</div>
                <List.Item.Meta
                  title={item.user?.fullName}
                  description={`Ticket number : ${item.ticketId}`}
                />
                <div>
                  Booked at : 
                  {moment(item.created_at).format('ddd, D MMM, YYYY')}
                </div>
              </Skeleton>
            </List.Item>
          )
        }}
      />
    )
  }
  
  const headers = [
    { label: 'No', key: 'no'},
    { label: 'Ticket', key: 'ticketNumber'},
    { label: 'Full Name', key: 'fullName'},
    { label: 'Book Date', key: 'bookDate'},
  ]

  return (
    <>
      <Modal 
        title="List Attendees" 
        visible={modalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} style={{ marginRight: 10 }}>
            Return
          </Button>,
          formattedData &&
          <CSVLink data={formattedData} headers={headers} filename={"listAttendees.csv"}>
            <Button
              key="download"
              type="primary"
              loading={!data && !error}
            >
              Download CSV
            </Button>
          </CSVLink>,
        ]}
      >
        {viewList()}
      </Modal>
    </>
  )
}

export default ModalEventAttendees