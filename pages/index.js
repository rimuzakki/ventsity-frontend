import { Row, Col, Button } from 'antd'
import Router from 'next/router'
import cx from 'classnames'
import MainLayout from 'components/layouts/mainLayout'
import Container from 'components/elements/container/container'
import Search from 'components/elements/search/search'
import UpcomingEvent from 'components/modules/upcoming-event/upcomingEvent'
import EventCategories from 'components/modules/event-categories/eventCategories'
import { RightOutlined } from '@ant-design/icons'

import s from './index.module.less'

const dataEvents = [
  {
    id: 1,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 2,
    title: 'React JS untuk pemula React JS untuk pemula React JS untuk pemula React JS untuk pemula',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Technology',
    type_event: 'offline',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 3,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 4,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 5,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 6,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 7,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 8,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 9,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  },
  {
    id: 10,
    title: 'Langkah Mudah Memulai Digital Marketing',
    cover_image: 'assets/card-image.png',
    id_category: '1',
    category: 'Marketing',
    type_event: 'online',
    created_by: 'Fakultas Teknologi dan Informasi',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    limit_attendees: 100,
    date_start: '2021-06-12',
    date_end: '2021-06-12',
    time_start: '08:00',
    time_end: '17:00',
    location_desc: 'Auditorium USM',
    location_name: 'Universitas Semarang',
    location_link: 'https://goo.gl/maps/LH6pnExC48WC93wG9',
    participant: 75
  }
]

const dataCategories = [
  {
    id: 1,
    title: 'Programming',
    slug: 'programming',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 2,
    title: 'Writing',
    slug: 'writing',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 3,
    title: 'Sport',
    slug: 'sport',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 4,
    title: 'Photography',
    slug: 'photography',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 5,
    title: 'Music',
    slug: 'music',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 6,
    title: 'Learning',
    slug: 'learning',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 7,
    title: 'Outdoor',
    slug: 'outdoor',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 8,
    title: 'Arts',
    slug: 'arts',
    cover_image: 'assets/category-image.png'
  },
  {
    id: 9,
    title: 'Career Development',
    slug: 'careerdevelopment',
    cover_image: 'assets/category-image.png'
  }
]

export default function Page () {

  const handleClickBrowse = () => {
    Router.push({
      pathname: '/events'
    })
  }

  return (
    <>
      <div className={cx('relative', s.blobWrapper)}>
        <img src='assets/Vector.svg' className={cx('absolute', s.bg1)} />
        <img src='assets/Vector-1.svg' className={cx('absolute', s.bg2)} />
        <img src='assets/Vector-2.svg' className={cx('absolute', s.bg3)} />
        <div className={s.indexWrapper}>
          <MainLayout>
            <div className={cx('section', s.sectionHero)}>
              <Container>
                <Row>
                  <Col sm={24} md={12}>
                    <div className={cx('heroText', s.heroText)}>
                      <h1>Join events in the university easily</h1>
                    </div>
                    <Button size='large' type="primary" className={s.ctaButton} onClick={handleClickBrowse}>Browse events <RightOutlined /></Button>
                  </Col>
                  <Col sm={24} md={12} className='flex align-items-center'>
                    <img src='assets/illustration1.svg' className={cx('homeIllu', s.homeIllustration)} />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={cx('section', s.sectionSearch)}>
              <Search />
            </div>

            <div className={cx('section', s.sectionUpcomingEvent)}>
              <Container>
                <Row>
                  <Col span={24}>
                    <UpcomingEvent />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={cx('section', s.sectionCategoriesEvent)}>
              <Container>
                <Row>
                  <Col span={24}>
                    <EventCategories />
                  </Col>
                </Row>
              </Container>
            </div>
            
          </MainLayout>
        </div>
      </div>
    </>
  )
}