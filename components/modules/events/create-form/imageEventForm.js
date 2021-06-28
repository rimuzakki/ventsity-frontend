import { useState } from 'react'
import { Form, Input, Upload, message } from 'antd'
import cx from 'classnames'
import { UploadOutlined, InboxOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons'
import s from './createEvent.module.less'

function ImageEventForm() {

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const normFile = (e) => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
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

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl)
        setLoading(false)
      }
      );
    }
  };

  return (
    <>
      <Form.Item label="Image">
        <Form.Item name="imageEvent" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload 
            name="imageEventUploader"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            className='customUploadBox'
          >
            {
              imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> :
              <div className='flex flex-column'>
                <p className={cx(s.iconUpload)}>
                  {loading ? <LoadingOutlined /> : <InboxOutlined />}
                </p>
                <p className={s.uploadText}>Upload Image Event</p>
                <p className={s.uploadHint}>Click or drag file to this area to upload</p>
              </div>
            }
          </Upload>
        </Form.Item>
        <div className={s.helperText}>
          <p>
            Recommended image size is 1024 x 768 pixels.
            Maximum image size 1 Mb, file types jpg, jpeg, png.
            Images can be added after uploading the main image.
          </p>
        </div>
      </Form.Item>
    </>
  )
}

export default ImageEventForm