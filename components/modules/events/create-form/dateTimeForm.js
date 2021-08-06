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

  const dateFormat = 'YYYY-MM-DD'
  const timeFormat = 'HH:mm'

  return (
    <>
      <Row gutter={16}>
        <Col>
          <Form.Item 
            name="dateStart" 
            label="Event Start" 
            {...config}
          >
            <DatePicker
              format={dateFormat}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item 
            name="timeStart" 
            label="Start Time" 
            {...config}
          >
            <TimePicker
              format={timeFormat}
            />
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
            <DatePicker
              format={dateFormat}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item 
            name="timeEnd" 
            label="End Time" 
            {...config}
          >
            <TimePicker
              format={timeFormat}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default DateTimeForm