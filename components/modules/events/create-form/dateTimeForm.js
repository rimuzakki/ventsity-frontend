import { Row, Col, Form, Input, Switch, DatePicker, TimePicker } from 'antd'

function DateTimeForm() {
  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };

  return (
    <>
      <Row gutter={16}>
        <Col>
          <Form.Item 
            name="dateStart" 
            label="Event Start" 
            {...config}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item 
            name="timeStart" 
            label="Start Time" 
            {...config}
          >
            <TimePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col>
          <Form.Item 
            name="dateEnd" 
            label="Event End" 
            {...config}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item 
            name="timeEnd" 
            label="End Time" 
            {...config}
          >
            <TimePicker />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default DateTimeForm