import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import UserForm from './userForm'
import { Row, Col, Skeleton } from 'antd'
import { useSession } from 'next-auth/client'
import s from './user.module.less'
import { useGetUserByAuth } from 'modules/users/get-user-by-auth'
import FullPageLoader from 'components/elements/fallback/fullPageLoader'

function UserWrapper() {
  const [ session, loading ] = useSession()
  // console.log('session', session)

  const { data, error } = useGetUserByAuth()
  // console.log(data)

  const viewMain = () => {
    return (
      <>
        <Container>
          <TitleSection title='Manage Profile' />
          
          <Row justify='center'>
            <Col span={20}>
              <div className={s.tabWrapper}>
                <div className={s.tabHeader}>
                  Edit profile for : 
                  {
                    data ? 
                    <strong> {data.email}</strong>
                    :
                    <Skeleton.Input style={{ width: 200, marginLeft: 8 }} active size='small' />
                  }
                </div>
  
                <div className={s.tabContent}>
                  <UserForm
                    data={data}
                    dataSession={session}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  return (
    <>
      {
        (!data && !error) &&
        <FullPageLoader />
      }
      {
        data &&
        viewMain()
      }
    </>
  )
}

export default UserWrapper