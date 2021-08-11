import App from 'next/app';
import config from 'config'
import { Provider as AuthProvider, getSession } from 'next-auth/client'
import axios from 'axios'
import MainLayout from 'components/layouts/mainLayout'
import PrivateRoute from 'components/layouts/privateRoute'
import Context from 'libs/context/context'
// require('styles/global.less')
import { useRouter } from 'next/router'
import 'antd/dist/antd.less'
import 'styles/global.less'

function MyApp({ Component, pageProps, session }) {
  const protectedRoutes = ['/user', '/my-events', '/my-tickets', '/events/create', '/events/edit', '/eticket']

  // console.log('session', session)
  const { asPath, pathname } = useRouter()

  axios.defaults.baseURL = config.api_url;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  if (session?.jwt) {
    axios.defaults.headers.common['Authorization'] = 'bearer ' + session.jwt;
  }

  return (
    <Context.Provider displayName="Context Display Name">
      <AuthProvider
          session={session} 
        >
          {
            pathname === '/' || pathname === '/#' ?
            <Component {...pageProps} />
            :
            <PrivateRoute protectedRoutes={protectedRoutes}>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </PrivateRoute>
          }
      </AuthProvider>
    </Context.Provider>
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
