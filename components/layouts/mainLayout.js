import { Layout } from 'antd'
import Header from 'components/layouts/header'
import Footer from 'components/layouts/footer'
import Head from 'components/layouts/head'

const { Content } = Layout;

export default function MainLayout ({children}) {
  return (
    <Layout className="mainLayout">
      <Head title="Ventsity" />

      <Header/>

      <Content>
        {children}
      </Content>

      <Footer/>
      
    </Layout>
  )
}