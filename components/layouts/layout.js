import Header from 'components/layouts/header'
import Footer from 'components/layouts/footer'
import Head from 'components/layouts/head'

export default function Layout ({children}) {
  return (
    <>
      <Head title="Ventsity" />

      <Layout className='siteLayout'>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </Layout>
    </>
  )
}