import Link from "next/link"
import { Row, Col, Typography } from 'antd'
import Container from 'components/elements/container/container'
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import cx from 'classnames'
import s from "./footer.module.less"

const { Text, Title } = Typography

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <Row>
          <Col span={24}>
            <div className={s.footerCta}>
              <Title level={4}>
                Create your own event
                <Link href='/events/create'>
                  <a>Create Event</a>
                </Link>
                or find interested event 
                <Link href='/events'>
                  <a>Find Event</a>
                </Link>
              </Title>
            </div>
          </Col>
        </Row>

        <Row className={s.footerContact}>
          <Col sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            <Title level={5}>
              Ventsity Office
            </Title>
            <p>Universitas Semarang</p>
            <p>Jl. Soekarno Hatta</p>
            <p>Tlogosari, Semarang 50196</p>
            <p style={{ marginTop: 16 }}>
              <strong>Working Hours : </strong>
              Weekdays @ 09.00 - 20.00
            </p>
          </Col>

          <Col md={24} lg={4} style={{ marginBottom: 16 }}>
            <Title level={5}>
              Whatsapp
            </Title>
            <Text>+62 831 2312 312</Text>
          </Col>

          <Col md={24} lg={4} style={{ marginBottom: 16 }}>
            <Title level={5}>
              Email
            </Title>
            <Text>hello@ventsity.com</Text>
          </Col>

        </Row>

        <Row className={cx('justify-content-center align-items-center', s.footerSmall)}>
          <Col md={24} lg={12} style={{ marginBottom: 10 }}>
            <Link href='/'>
              <TwitterOutlined className={s.icon} />
            </Link>
            <Link href='/'>
              <FacebookOutlined className={s.icon} />
            </Link>
            <Link href='/'>
              <InstagramOutlined className={s.icon} />
            </Link>
          </Col>
          <Col md={24} lg={12} className='flex justify-content-end'>
            <p>Ventsity © 2021. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
