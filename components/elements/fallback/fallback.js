import { Button } from 'antd'

function Fallback({ action, textAction, title }) {
  return (
    <div className='flex align-items-center justify-content-center flex-column' style={{width: '100%', minHeight: '50vh'}}>
      <h3 style={{marginBottom: 20, fontWeight: 'bold'}}>{title}</h3>
      {
        action && 
        <Button onClick={action}>{textAction}</Button>
      }
    </div>
  )
}

export default Fallback