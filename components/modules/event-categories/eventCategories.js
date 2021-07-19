import { Row, Col } from 'antd'
import TitleSection from 'components/elements/title-section/titleSection'
import CardCategory from 'components/elements/card-category/cardCategory'
import Fallback from 'components/elements/fallback/fallback'
import { useGetCategories } from 'modules/categories/get-categories'
import cx from 'classnames'
import s from './eventCategories.module.less'

function UpcomingEvent(props) {
  const { data: dataCategories, error } = useGetCategories()

  return (
    <div className={s.eventCategoriesWrapper}>
      <TitleSection
        title='Event Categories'
      />

      <div className={cx(s.cardEventCategoriesWrapper)}>
        <Row gutter={40} className={cx('flex justify-content-center')}>
          
            {
              dataCategories === null &&
              <Fallback title='No categories' />
            }
            {
              dataCategories?.map(c => 
                <Col xs={24} md={12} lg={8} key={c.id}>
                  <CardCategory category={c} />
                </Col>
              )
            }
        </Row>  
      </div>
    </div>
  )
}

export default UpcomingEvent