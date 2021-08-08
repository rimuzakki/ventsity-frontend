import Link from 'next/link'
import { Avatar, Popover } from 'antd'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useGetUserByAuth } from 'modules/users/get-user-by-auth'
import cx from 'classnames'
import config from 'config'
import {
  UserOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import s from '../header.module.less'


function RightMenu(props) {
  const [ session, loading ] = useSession()
  const { data: dataUser, error } = useGetUserByAuth()
  const path = (dataUser && dataUser.userAvatar) && dataUser.userAvatar.url


  const menu = () => {
    return (
      <div className={s.profilePopup}>
        {/* <div>
          <span className={s.signedInText}>
            {session.user.name || session.user.email}
          </span>
        </div> */}
        <ul className={s.menu}>
          <li>
            <Link href='/user'>
              <a>
                <UserOutlined /> Profile
              </a>
            </Link>
          </li>
          <li>
            <Link href='/my-events'>
              <a>
                <AppstoreOutlined /> My Events
              </a>
            </Link>
          </li>
          <li>
            <Link href='/my-tickets'>
              <a>
                <ScheduleOutlined /> My Tickets
              </a>
            </Link>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    )
  }
  
  return (
    <>
      <div className={s.ctaHeader}>
        <Link href='/events/create'>
          <a className={s.ctaLink}>
            Create Event
          </a>
        </Link>
      </div>
      <div className={s.signedInStatus}>
        <div className={`nojs-show ${(!session && loading) ? s.loading : s.loaded}`}>
          {!session && <>
            <div className={s.ctaHeader}>
              <a
                href={`/api/auth/signin`}
                // href={`/signin`}
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
              <Popover 
                content={menu} 
                trigger='click'
                placement='bottomRight'
                overlayClassName='popupNoPadding'
                getPopupContainer={node => {
                  if (node) {
                    return node.parentNode;
                  }
                  return document.body;
                }}
              >
                <a className={cx('ant-dropdown-link flex align-items-center', s.ctaLink)} onClick={e => e.preventDefault()}>
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
                </a>
              </Popover>
            </div>
          </>}
        </div>
      </div>
    </>
  )
}

export default RightMenu