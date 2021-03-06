import MainLayout from 'components/layouts/mainLayout'
import User from 'components/user'

export default function Page () {
  return (
    <MainLayout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p><em>You must be signed in to see responses.</em></p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session"/>
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      {/* <iframe src="/api/examples/jwt"/> */}

      <h2>Users Me</h2>
      <p>/api/examples/user</p>
      <User />
    </MainLayout>
  )
}