import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Layout, Row, Col,Menu, Dropdown, Avatar, Button } from 'antd'
import cx from 'classnames'
import { CaretDownOutlined } from '@ant-design/icons'
import s from './header.module.less'

const { Header } = Layout;

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function MainHeader () {
  const [ session, loading ] = useSession()
  console.log('sessionHeader', session)

  const menu = () => {
    return (
      <Menu>
        <Menu.Item>
          <a
            href={`/api/auth/signout`}
            className={s.button}
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign out
          </a>
        </Menu.Item>
      </Menu>
    )
  }
  
  return (
    <Header className={s.mainHeader}>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Row justify="space-between" className='flex align-items-center'>
        <Col xs={24} sm={24} md={6} lg={6} xl={5}>
          <h1>
            <a href='/' className={s.logo}>
              Ventsity
            </a>
          </h1>
        </Col>
        <Col xs={0} sm={0} md={18} lg={18} xl={19} className={cx(s.menuRow, 'justify-content-end')}>
          <div className={s.ctaHeader}>
            <a href='#' className={s.ctaLink}>
              Create Event
            </a>
            {/* <Button type="primary">Primary Button</Button> */}
          </div>
          <div className={s.signedInStatus}>
            <div className={`nojs-show ${(!session && loading) ? s.loading : s.loaded}`}>
              {!session && <>
                <div className={s.ctaHeader}>
                  <a
                    href={`/api/auth/signin`}
                    className={s.ctaLink}
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    Sign in
                  </a>
                </div>
              </>}
              {session && <>
                <div className={s.ctaHeader}>
                  <Dropdown overlay={menu}>
                    <a className={cx('ant-dropdown-link flex align-items-center', s.ctaLink)} onClick={e => e.preventDefault()}>
                      {
                        session.user.image && 
                        // <span style={{backgroundImage: `url(${session.user.image})` }} className={s.avatar}/>
                        <Avatar src={session.user.image} className={s.avatar} />
                      }
                      <span className={s.signedInText}>
                        {session.user.name || session.user.email}
                      </span>
                      <CaretDownOutlined />
                    </a>
                  </Dropdown>
                </div>
              </>}
            </div>
          </div>
        </Col>
      </Row>
      
      {/* <nav>
        <ul className={s.navItems}>
          <li className={s.navItem}><Link href="/"><a>Home</a></Link></li>
          <li className={s.navItem}><Link href="/client"><a>Client</a></Link></li>
          <li className={s.navItem}><Link href="/server"><a>Server</a></Link></li>
          <li className={s.navItem}><Link href="/protected"><a>Protected</a></Link></li>
          <li className={s.navItem}><Link href="/api-example"><a>API</a></Link></li>
        </ul>
      </nav> */}
    </Header>
  )
}
