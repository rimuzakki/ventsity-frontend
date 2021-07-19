import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
function FullPageLoader() {
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />
  return (
    <>
      <div className='flex align-items-center justify-content-center' style={{ width: '100%', height: '100vh' }}>
        <Spin indicator={antIcon} />
      </div>
    </>
  )
}

export default FullPageLoader