import Layout from 'components/layouts/layout'
import cx from 'classnames'
import s from './index.module.less'

export default function Page () {
  return (
    <>
      <div className={cx('relative', s.blobWrapper)}>
        <img src='assets/Vector.svg' className={cx('absolute', s.bg1)} />
        <img src='assets/Vector-1.svg' className={cx('absolute', s.bg2)} />
        <img src='assets/Vector-2.svg' className={cx('absolute', s.bg3)} />
        <div className={s.indexWrapper}>
          <Layout>
            <h1>NextAuth.js Example</h1>
            <p>
              This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
            </p>
          </Layout>
        </div>
      </div>
    </>
  )
}