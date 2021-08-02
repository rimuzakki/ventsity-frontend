import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Layout, Row, Col, Input, Grid, Button, Drawer, Menu, Avatar } from 'antd'
import { useGetUserByAuth } from 'modules/users/get-user-by-auth'
import Container from 'components/elements/container/container'
import RightMenu from './menu/rightMenu'
import config from 'config'
import cx from 'classnames'
import {
  UserOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  LogoutOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  LoginOutlined
} from '@ant-design/icons'
import s from './header.module.less'

const { Header } = Layout
const { Search } = Input
const { useBreakpoint } = Grid

function MainHeader () {
  
  const [ session, loading ] = useSession()
  const { asPath } = useRouter()
  const router = useRouter()
  const { xs, sm, md } = useBreakpoint();
  const { data: dataUser, error } = useGetUserByAuth()
  // console.log('breakpoint', xs, sm, md)
  // console.log('sessionHeader', session)
  // console.log('path', asPath)

  const [draweVisible, setDrawerVisible] = useState(false)

  const navbarBrand = () => {
    return (
      <h1>
        <Link href='/'>
          <a className={s.logo}>
            Ventsity
          </a>
        </Link>
      </h1>
    )
  }

  const onSearch = value => {
    // console.log(value)
    router.push(`/discover/${value}`)
  }

  const searchMain = () => {
    return (
      (asPath !== '/' && asPath !== '/#') &&
      <Search className='customSearch' placeholder="input search text" allowClear onSearch={onSearch} bordered={false} />
    )
  }

  const viewProfile = () => {
    const path = (dataUser && dataUser.userAvatar) && dataUser.userAvatar.url
    // console.log('path', path)
    return (
      <div className={cx('flex align-items-center justify-content-between', s.profileWrapper)}>
        <span className={s.signedInText}>
          {session.user.name || session.user.email}
        </span>
        {
          session.user.image ? 
          <Avatar 
            src={
              path !== null ? config.api_url + path : session.user.image
            }  
            className={cx(s.avatar, 'ccc')} 
          />
          :
          <Avatar 
            className={s.avatar} 
            icon={<UserOutlined />}
          />
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
            <Link href='/'>
              <a>
                <HomeOutlined /> Home
              </a>
            </Link>
          </Menu.Item>

          <Menu.Item key='createEvent'>
            <Link href='/events/create'>
              <a>
                <AppstoreAddOutlined /> Create Event
              </a>
            </Link>
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
                <LoginOutlined /> Sign in
              </a>
            </Menu.Item>
          </>}

          {session && <>

            <Menu.Item key='profile'>
              <Link href='/user'>
                <a>
                  <UserOutlined />Profile
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item key='myEvents'>
              <Link href='/my-events'>
                <a>
                  <AppstoreOutlined /> My Events
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item key='myTickets'>
              <Link href='/my-tickets'>
                <a>
                  <ScheduleOutlined /> My Tickets
                </a>
              </Link>
            </Menu.Item>
          
            <Menu.Item key='logout' className={s.menuLogout}>
              <a
                href={`/api/auth/signout`}
                className={s.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                <LogoutOutlined /> Sign out
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
      className={asPath !== '/' && asPath !== '/#' ? cx(s.mainHeader, s.headerWhite) : cx(s.mainHeader)}
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