import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Layout, Row, Col, Input, Grid, Button, Drawer, Menu, Avatar } from 'antd'
import Container from 'components/elements/container/container'
import RightMenu from './menu/rightMenu'
import cx from 'classnames'
import s from './header.module.less'

const { Header } = Layout
const { Search } = Input
const { useBreakpoint } = Grid

function MainHeader () {
  
  const [ session, loading ] = useSession()
  const { asPath } = useRouter()
  const { xs, sm, md } = useBreakpoint();
  console.log('breakpoint', xs, sm, md)
  // console.log('sessionHeader', session)
  // console.log('path', asPath)

  const [draweVisible, setDrawerVisible] = useState(false)

  const navbarBrand = () => {
    return (
      <h1>
        <a href='/' className={s.logo}>
          Ventsity
        </a>
      </h1>
    )
  }

  const onSearch = value => console.log(value);

  const searchMain = () => {
    return (
      asPath !== '/' &&
      <Search className='customSearch' placeholder="input search text" allowClear onSearch={onSearch} bordered={false} />
    )
  }

  const viewProfile = () => {
    return (
      <div className={cx('flex align-items-center justify-content-between', s.profileWrapper)}>
        <span className={s.signedInText}>
          {session.user.name || session.user.email}
        </span>
        {
          session.user.image && 
          <Avatar src={session.user.image} className={s.avatar} />
        }
      </div>
    )
  }

  const viewMenuSide = () => {
    return (
      <>
        { session && viewProfile()}
        <Menu mode='inline' className={s.menuSideWrapper}>
          <Menu.Item key='home'>
            <a href='/'>Home</a>
          </Menu.Item>
          
          {!session && <>
            <Menu.Item key='login'>
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
            </Menu.Item>
          </>}

          <Menu.Item key='cevent'>
            <a href="">Create Event</a>
          </Menu.Item>

          {session && <>
            <Menu.Item key='logout' className={s.menuLogout}>
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
          </>}
        </Menu>
      </>
    )
  }

  const onShowDrawer = () => {
    setDrawerVisible(true)
  }

  const onCloseDrawer = () => {
    setDrawerVisible(false)
  }

  
  return (
    <Header 
      className={asPath !== '/' ? cx(s.mainHeader, s.headerWhite) : cx(s.mainHeader)}
      // className={s.mainHeader}
    >
      <Container>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <Row justify="space-between" className={cx('flex align-items-center', s.rowHeader)} style={{ minHeight: 62 }}>
          <Col xs={20} sm={6} md={6} lg={4} className={s.navbarBrandWrapper}>
            {navbarBrand()}
          </Col>
          <Col xs={24} sm={12} md={12} lg={14} className={cx('flex align-items-center', s.searchMainWrapper)}>
            {searchMain()}
          </Col>
          <Col xs={4} sm={6} md={6} lg={6} className={cx(s.menuWrapper, 'flex align-items-center justify-content-end')}>
            {
              (xs || sm && !md) &&
              <Button className={s.barsMenu} type="primary" onClick={onShowDrawer}>
                <span className={s.barsBtn}></span>
              </Button>
            }
            {
              md &&
              <RightMenu />
            }
            <Drawer
              placement="right"
              closable={false}
              onClose={onCloseDrawer}
              visible={draweVisible}
            >
              {viewMenuSide()}
            </Drawer>
          </Col>
        </Row>
      </Container>
    </Header>
  )
}

export default MainHeader