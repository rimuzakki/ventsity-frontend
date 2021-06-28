import Image from 'next/image'
import Container from 'components/elements/container/container'
import TitleSection from 'components/elements/title-section/titleSection'
import EventRegister from './eventRegister'
import { useState } from 'react'
import { Row, Col, Skeleton } from 'antd'
import cx from 'classnames'
import s from './eventDetail.module.less'

function EventDetail() {
  const [ loading, setLoading ] = useState(false)

  const viewLoading = () => {
    return (
      <>
        <Skeleton.Image active />
        <Skeleton active />
      </>
    )
  }

  return (
    <>
      <section className={cx('section', s.sectionEventDetail)}>
        <Container>
          <Row>
            <Col>
              <TitleSection title='Event Detail' />
            </Col>
          </Row>
          <Row gutter={32}>
            <Col sm={24} lg={12}>
              {
                loading ?
                viewLoading() :
                <>
                  <div className={s.imageEventWrapper}>
                    <Image 
                      className={s.imageEvent}
                      src={`/assets/event-detail.jpg`} 
                      alt="Card Image" 
                      layout='fill'
                      objectFit='cover' 
                      // width={580} 
                      // height={390} 
                    />
                  </div>
                  <div className={s.descriptionWrapper}>
                    <h4 className={s.titleSection}>Description</h4>
                    <p>About this event : </p>
                    <p>
                      So you and your team have spent hundreds of hours building the most beautiful website. Now what? All that work might very well go to waste if few people pay it a visit. So you started on Search Engine Optimisation (SEO), or in other words, started on making small modifications to parts of your website. When viewed individually, these changes might seem like incremental improvements, but when combined with other optimisations, they could have a noticeable impact on your site’s user experience and performance in organic search results.
                    </p>
                    <p>
                      However, as with almost everything else in the marketing universe, SEO is an ongoing game. The best practices that worked 15, 10 or even 5 years ago are no longer as effective as they once were because things change. To emerge as winners in this SEO race, it is vital that you continuously monitor and adjust your strategies to help get your website on that coveted first Google search results page.
                    </p>
                    <p>
                      Join our digital marketing wizard, Sotirios Seridis, as we take a deep dive into how you can win this SEO game. Learn what matters for modern SEO, how to develop SEO-friendly content, get started with structured snippets and link building.
                    </p>
                    <p>
                      Speaker:
                    </p>
                    <p>
                      Sotirios Seridis | Founder, XYZ Lab
                    </p>
                  </div>
                </>
              }
            </Col>
            <Col sm={24} lg={12}>
              <EventRegister />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default EventDetail