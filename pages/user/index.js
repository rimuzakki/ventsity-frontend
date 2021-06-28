import Head from 'components/layouts/head'
import UserWrapper from 'components/modules/user/userWrapper'

function UserPage() {
  return (
    <>
      <Head title='Your Profile | Ventsity' />
      
      <UserWrapper />
    </>
  )
}

export default UserPage