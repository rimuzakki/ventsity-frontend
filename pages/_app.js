import App from 'next/app';
import { Provider as AuthProvider, getSession } from 'next-auth/client'
import axios from 'axios'
// require('styles/global.less')
import 'antd/dist/antd.less'
import 'styles/global.less'

function MyApp({ Component, pageProps, session }) {
  console.log('session', session)

  if (session?.jwt) {
    axios.defaults.headers.common['Authorization'] = 'bearer ' + session.jwt;
  }

  return (
    <AuthProvider
      session={session} 
    >
      <Component {...pageProps} />
    </AuthProvider>
  )
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context)
  const session = await getSession(context)

  return {
    ...appProps,
    session
  }
}

export default MyApp
