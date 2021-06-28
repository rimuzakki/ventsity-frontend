import { Row, Col, Form, Input, Button, Radio, Avatar, Image } from 'antd'

function UserForm() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Success:', values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  };

  const onSaveForm = () => {
    form
      .validateFields()
      .then((values) => {
        // form.resetFields();
        onFinish(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }

  return (
    <>
      <Row>
        <Col sm={24} lg={16}>
          <Form
            form={form}
            layout='vertical'
            name='formUser'
            initialValues={{
              fullname: 'John Doe',
              phonenumber: '+628562711435',
              gender: 'a'
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
          >
            <Form.Item
              label='Fullname'
              name='fullname'
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Phone Number'
              name='phonenumber'
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Please select an option!',
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="a">Male</Radio.Button>
                <Radio.Button value="b">Female</Radio.Button>
                <Radio.Button value="c">Not prefered</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item 
              label='Address'
              name='address'
            >
              <Input.TextArea />
            </Form.Item>

          </Form>
        </Col>

        <Col sm={24} lg={8}>
          <div className='flex justify-content-center align-items-center flex-column'>
            <Avatar
              size={110}
              src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            />
            <Button style={{ marginTop: 8 }}>Upload Photo</Button>
            <div 
              className='flex justify-content-center align-items-center flex-column'
              style={{ marginTop: 16 }}  
            >
              <p>Image size : max 1 Mb</p>
              <p>Image formats : .JPEG, .PNG</p>
            </div>
          </div>
        </Col>

      </Row>
      <Row>
        <Col span={24} className='flex justify-content-end'>
          <Button type='primary' onClick={onSaveForm}>
            Save
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default UserForm