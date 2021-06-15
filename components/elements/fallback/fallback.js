import { Button } from 'antd'

function Fallback({ action, textAction, title }) {
  return (
    <div className='flex align-items-center justify-content-center flex-column' style={{width: '100%', minHeight: 200}}>
      <p style={{marginBottom: 20}}>{title}</p>
      {
        action && 
        <Button onClick={action}>{textAction}</Button>
      }
    </div>
  )
}

export default Fallback