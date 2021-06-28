import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import UserForm from './userForm'
import { Row, Col } from 'antd'
import s from './user.module.less'

function UserWrapper() {
  return (
    <>
      <Container>
        <TitleSection title='Manage Profile' />
        
        <Row justify='center'>
          <Col span={20}>
            <div className={s.tabWrapper}>
              <div className={s.tabHeader}>
                Edit profile for : 
                <strong> johndoe@gmail.com</strong>
              </div>

              <div className={s.tabContent}>
                <UserForm />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserWrapper