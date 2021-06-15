import { Typography } from 'antd'
import cx from 'classnames'
import s from './cardCategory.module.less'

const { Text, Paragraph } = Typography

function CardCategory(props) {
  const { category } = props
  return (
    <div className={cx('flex flex-row', s.cardCategory)}>
      <div className={s.categoryImage}>
        <img src={category.cover_image} alt={category.title} />
      </div>
      <div className={s.categoryText}>
        <Paragraph 
          ellipsis={
            {
              rows: 1,
              tooltip: category.title,
            }
          }
        >
          {category.title}
        </Paragraph>
      </div>
    </div>
  )
}

export default CardCategory