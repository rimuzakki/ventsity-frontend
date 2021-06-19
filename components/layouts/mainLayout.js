import { Layout } from 'antd'
import MainHeader from 'components/layouts/mainHeader'
import Footer from 'components/layouts/footer'
import Head from 'components/layouts/head'

const { Content } = Layout;

export default function MainLayout ({children}) {
  return (
    <Layout className='mainLayout'>
      <Head title='Ventsity' />

      <MainHeader/>

      <Content className='mainContent'>
        {children}
      </Content>

      <Footer/>
      
    </Layout>
  )
}