import Link from 'next/link'
import { Typography } from 'antd'
import cx from 'classnames'
import s from './cardCategory.module.less'
import config from 'config'

const { Text, Paragraph } = Typography

function CardCategory(props) {
  const { category } = props
  const path = (category && category.cover) && category.cover.formats.thumbnail.url
  const coverThumbnailUrl = config.api_url + path
  return (
    <Link href='/events'>
      <a>
        <div className={cx('flex flex-row', s.cardCategory)}>
          <div className={s.categoryImage}>
            <img src={coverThumbnailUrl} alt={category.name} />
          </div>
          <div className={s.categoryText}>
            <Paragraph 
              ellipsis={
                {
                  rows: 1,
                  tooltip: category.name,
                }
              }
            >
              {category.name}
            </Paragraph>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardCategory