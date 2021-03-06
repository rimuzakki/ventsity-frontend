import { Form, Input, Select, InputNumber } from 'antd'
import { useGetCategories } from 'modules/categories/get-categories'

const { Option } = Select

function BasicInfoForm() {
  const { data: dataCategories, error } = useGetCategories()

  return (
    <>
      <Form.Item
        label='Event Title'
        name='eventTitle'
        rules={[{ required: true, message: 'Please input the title of the event!' }]}
      >
        <Input placeholder='Enter your event title' />
      </Form.Item> 

      {/* <Form.Item
        label='Event Organizer'
        name='eventOrganizer'
        rules={[{ required: true, message: 'Please input the organizer name of the event!' }]}
      >
        <Input placeholder='Enter your organizer name' />
      </Form.Item>  */}

      <Form.Item 
        label='Event Category' 
        name='eventCategory'
        rules={[{ required: true, message: 'Please select the event category!' }]}
      >
        <Select
          placeholder='Select category for this event'
          allowClear
        >
          {
            dataCategories?.map(c =>
              <Option key={c.id} value={c.id}>{c.name}</Option>
            )
          }
        </Select>
      </Form.Item>

      <Form.Item
        label='Event Description'
        name='eventDescription'
        rules={[{ required: true, message: 'Please add description for the event!' }]}
      >
        <Input.TextArea placeholder='Add description about your event' />
      </Form.Item> 

      <Form.Item
        label='Email Contact Person'
        name='eventContactPerson'
        rules={[{ required: true, type: 'email', message: 'Please add email contact person of the event!' }]}
      >
        <Input placeholder='Enter your organizer email' />
      </Form.Item> 

      <Form.Item
        label='Quota of participants'
        name='eventParticipant'
        rules={[{ type: 'number' }]}
      >
        <InputNumber placeholder='Enter maximum limit of the participants' style={{ width: '100%' }} />
      </Form.Item> 
    </>
  )
}

export default BasicInfoForm