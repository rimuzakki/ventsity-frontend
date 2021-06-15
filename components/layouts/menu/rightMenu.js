import { Avatar, Popover } from 'antd'
import { signIn, signOut, useSession } from 'next-auth/client'
import { DownOutlined } from '@ant-design/icons'
import cx from 'classnames'
import s from '../header.module.less'


function RightMenu() {
  const [ session, loading ] = useSession()

  const menu = () => {
    return (
      <div>
        <div>
          <span className={s.signedInText}>
            {session.user.name || session.user.email}
          </span>
        </div>
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
      </div>
    )
  }
  
  return (
    <>
      <div className={s.ctaHeader}>
        <a href='#' className={s.ctaLink}>
          Create Event
        </a>
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
              <Popover content={menu} trigger="click" placement="bottomRight">
                <a className={cx('ant-dropdown-link flex align-items-center', s.ctaLink)} onClick={e => e.preventDefault()}>
                  {
                    session.user.image && 
                    <Avatar src={session.user.image} className={s.avatar} />
                  }
                  <DownOutlined />
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