import App from 'next/app';
import { Provider as AuthProvider, getSession } from 'next-auth/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps, session }) {
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
