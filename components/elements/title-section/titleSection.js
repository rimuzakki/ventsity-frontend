import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { DoubleRightOutlined } from '@ant-design/icons'
import s from './titleSection.module.less'

function TitleSection(props) {
  const { title, loadMoreTarget, loadMoreText } = props
  const router = useRouter()

  const handleClickAction = () => {
    router.push(loadMoreTarget)
  }

  return (
    <div className={cx('flex justify-content-between align-items-center', s.titleSectionWrapper)}>
      <h3>{title || 'Title Section'}</h3>
      {
        loadMoreTarget && 
        <div className={s.actionTitle}>
          <a onClick={handleClickAction}>{loadMoreText} <DoubleRightOutlined /></a>
        </div>
      }
    </div>
  )
}

export default TitleSection