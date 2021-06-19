import App from 'next/app';
import { Provider as AuthProvider, getSession } from 'next-auth/client'
import axios from 'axios'
import MainLayout from 'components/layouts/mainLayout'
// require('styles/global.less')
import { useRouter } from 'next/router'
import 'antd/dist/antd.less'
import 'styles/global.less'

function MyApp({ Component, pageProps, session }) {
  console.log('session', session)
  const { asPath } = useRouter()

  if (session?.jwt) {
    axios.defaults.headers.common['Authorization'] = 'bearer ' + session.jwt;
  }

  return (
    <AuthProvider
        session={session} 
      >
        {
          asPath === '/' ?
          <Component {...pageProps} />
          :
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        }
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
