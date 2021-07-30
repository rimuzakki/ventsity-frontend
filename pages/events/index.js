import { Pagination } from 'antd'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'components/layouts/head'
import Container from 'components/elements/container/container'
import EventListWrapper from 'components/modules/events/eventListWrapper'
import { useGetEvents } from 'modules/events/get-events'
import Context from 'libs/context/context'

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

function Event() {
  const router = useRouter()
  const query = router.query
  console.log(query);

  const [ pageIndex, setPageIndex ] = useState(0)
  const [ pageSize, setPageSize ] = useState(10)
  const { 
    filterDateValue, setFilterDateValue,
    filterTypeValue, setFilterTypeValue,
    filterCategoryValue, setFilterCategoryValue
  } = Context.useContainer()
  const { data: dataEvents, error, count } = useGetEvents(pageIndex, pageSize, filterDateValue, filterTypeValue, filterCategoryValue)

  const onShowSizeChange = (current, pageSize) => {
    const start = +current === 1 ? 0 : (+current - 1) * pageSize
    setPageIndex(start)
    setPageSize(pageSize)
  }

  useEffect(() => {
    if (query) {
      query.category && setFilterCategoryValue(query.category)
    }
  }, [query])

  return (
    <>
      <Head title='Find Events | Ventsity' />

      <Container>
        <EventListWrapper
          dataEvents={dataEvents}
          error={error}
        />
        <div className='flex justify-content-center align-items-center' style={{ marginTop: 64 }}>
          <Pagination
            showSizeChanger
            onChange={onShowSizeChange}
            defaultCurrent={1}
            total={count}
            hideOnSinglePage
          />
        </div>
      </Container>
    </>
  )
}

export default Event