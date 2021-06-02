import Header from 'components/layouts/header'
import Footer from 'components/layouts/footer'

export default function Layout ({children}) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}