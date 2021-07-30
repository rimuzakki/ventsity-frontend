import { mutate } from 'swr'
import { Row, Col, Form, Input, Button, Radio, Avatar, Image, Upload, message } from 'antd'
import { useEffect, useState } from 'react'
import config from 'config'
import axios from 'axios'

function UserForm(props) {
  const {data, dataSession} = props
  // console.log('d', data)

  const path = (data && data.userAvatar) && data.userAvatar.url
  const imageUrlTxt = path === null ? dataSession.user.image : config.api_url + path
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(imageUrlTxt)
  const [loadingUpdate, setLoadingUpdate] = useState(false)

  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Success:', values)
    setLoadingUpdate(true)
    axios.put(`users/${data.id}`, {
      fullName: values.fullname,
      phoneNumber: values.phonenumber,
      gender: values.gender,
      address: values.address
    })
      .then(result => {
        console.log('res', result)
        message.success('Data user updated')
      })
      .catch(err => {
        console.log('err', err)
        message.error('Edit user not successfull')
      })
      setLoadingUpdate(false)
  }

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

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChangeAvatar = (info) => {
    if (info.file.status === 'uploading') {
      // console.log('uploading', info)
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // console.log('done', info)

      getBase64(info.file.originFileObj, imageUrl => {

        const formData = new FormData();
        formData.append("files", info.file.originFileObj);
        formData.append("source", "users-permissions"); //This allows you to attach  picture to the user profile
        formData.append("ref", "user"); //name of content type
        formData.append("refId", data.id); //id of content type
        formData.append("field", "userAvatar"); //name of key for the content type

        setImageUrl(imageUrl)
        axios.post(`upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(result => {
          console.log('res', result)
          mutate('/users/me')
        })
        .catch(err => {
          console.log('err', err)
        })
        setLoading(false)
      }
      );
    }
  }

  useEffect(() => {
    form.setFieldsValue({
      fullname: data.fullName || dataSession.user.name,
      phonenumber: data.phoneNumber || '',
      gender: data.gender || null,
      address: data.address || ''
    })
  }, [data])

  const viewForm = () => {
    return (
      <>
        <Row>
          <Col sm={24} lg={16}>
            <Form
              form={form}
              layout='vertical'
              name='formUser'
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
                  <Radio.Button value="1">Male</Radio.Button>
                  <Radio.Button value="2">Female</Radio.Button>
                  <Radio.Button value="3">Not prefered</Radio.Button>
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
              {
                loading ? 
                <Avatar size={110}>Loading</Avatar> :
                <Avatar
                  size={110}
                  src={<Image src={imageUrl} />}
                />
              }

              <Upload
                name="avatarProfile"
                // listType="picture-card"
                // className="avatar-uploader"
                showUploadList={false}
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                // action="http://localhost:1337/upload"
                beforeUpload={beforeUpload}
                onChange={handleChangeAvatar}
              >
                <Button style={{ marginTop: 8 }}>Upload Photo</Button>
              </Upload>

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
            <Button type='primary' onClick={onSaveForm} loading={loadingUpdate}>
              Save
            </Button>
          </Col>
        </Row>
      </>
    )
  }

  return (
    viewForm()
  )
}

export default UserForm