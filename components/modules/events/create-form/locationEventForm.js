import { useState, useEffect } from 'react'
import { Form, Input, Switch } from 'antd'
// import Context from 'libs/context/context'

function LocationEventForm(props) {
  const { isOnlineEvent } = props
  const [onlineEvent, setOnlineEvent] = useState(isOnlineEvent)

  // const { 
  //   eventData
  // } = Context.useContainer()
  // const data = eventData && eventData[0]

  const handleChangeSwitch = (checked) => {
    // console.log(`switch to ${checked}`)
    setOnlineEvent(checked)
  }

  // useEffect(() => {
  //   setOnlineEvent(data?.isOnlineEvent)
  // }, [data])

  const viewOnlineEvent = () => {
    return (
      <>
        <Form.Item
          label='URL Stream'
          name='eventStreamUrl'
          // rules={[{ required: true, message: 'Please input the title of the event!' }]}
        >
          <Input placeholder='Enter event stream URL' />
        </Form.Item> 
        <div>
          <p>
            Place your unique link event online platform to livestreams and more
          </p>
        </div>
      </>
    )
  }

  const viewOfflineEvent = () => {
    return (
      <>
        <Form.Item
          label='Place Name'
          name='eventPlaceName'
          rules={[{ required: true, message: 'Please input place name of the event!' }]}
        >
          <Input placeholder='Enter event place name' />
        </Form.Item> 

        <Form.Item
          label='Address'
          name='eventAddress'
          rules={[{ required: true, message: 'Please input address of the event!' }]}
        >
          <Input.TextArea placeholder='Enter event address' />
        </Form.Item> 

        <Form.Item
          label='Place Map URL'
          name='eventPlaceUrl'
          // rules={[{ required: true, message: 'Please input place name of the event!' }]}
        >
          <Input placeholder='Enter event place URL' />
        </Form.Item> 
      </>
    )
  }

  return (
    <>
      <Form.Item 
        name='switchOnlineEvent' 
        label='Online Event' 
        valuePropName="checked"
      >
          <Switch onChange={handleChangeSwitch} /> 
      </Form.Item>
      {/* <div className='flex align-items-center'>
        <p style={{ marginLeft: 8 }}>Online Event</p>
      </div> */}

      {
        onlineEvent ?
        viewOnlineEvent() :
        viewOfflineEvent()
      }
    </>
  )
}

export default LocationEventForm