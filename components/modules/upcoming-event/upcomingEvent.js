import { Row, Col } from 'antd'
import Carousel from 'react-multi-carousel'
import TitleSection from 'components/elements/title-section/titleSection'
import CardEvent from 'components/elements/card-event/cardEvent'
import Fallback from 'components/elements/fallback/fallback'
import cx from 'classnames'
import { useGetUpcomingEvents } from 'modules/events/get-upcoming-events'

import 'react-multi-carousel/lib/styles.css'
import s from './upcomingEvent.module.less'

function UpcomingEvent(props) {
  const { data: dataEvents, error } = useGetUpcomingEvents()

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className={cx(s.upcomingEventWrapper, 'upcomingEventWrapper')}>
      <TitleSection
        title='Upcoming Event'
        loadMoreTarget='/events'
        loadMoreText='See all'
      />

      <div className={cx(s.cardEventWrapper)}>
        <Row gutter={32} className={cx('flex justify-content-center')}>
          <Col span={24}>
            {
              (dataEvents && dataEvents.length > 0) &&
            
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className='carouselWrapper'
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass='cardEventItem'
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {
                  !dataEvents &&
                  <Fallback title='No data' />
                }
                {
                  dataEvents?.map(c => 
                    <CardEvent 
                      key={c.id} 
                      dataEvent={c} 
                      loading={!dataEvents && !error}
                    />
                  )
                }
              </Carousel>
            }
          </Col>
        </Row>  
      </div>
    </div>
  )
}

export default UpcomingEvent