import Head from 'components/layouts/head'
import MyEventWrapper from 'components/modules/my-events/myEventWrapper'
import { useGetOngoingMyEvents, useGetPastMyEvents, useGetDraftMyEvents } from 'modules/events/get-my-events'
import { useState, useEffect } from 'react'


const dataEventss = [
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
    participant: 75,
    maxParticipants: 100
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
    participant: 75,
    maxParticipants: 100
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
    participant: 75,
    maxParticipants: 100
  },
]

function MyEvents() {
  const [ pageIndex, setPageIndex ] = useState(0)
  const [ pageSize, setPageSize ] = useState(10)
  const { data: dataOngoingMyEvents, errorOngoing } = useGetOngoingMyEvents()
  const { data: dataPastMyEvents, errorPast } = useGetPastMyEvents()
  const { data: dataDraftMyEvents, errorDraft } = useGetDraftMyEvents()

  return (
    <>
      <Head title='My Events | Ventsity' />

      <MyEventWrapper
        ongoingEventData={dataOngoingMyEvents}
        pastEventData={dataPastMyEvents}
        draftEventData={dataDraftMyEvents}
        ongoingLoading={!dataOngoingMyEvents && !errorOngoing}
        pastLoading={!dataPastMyEvents && !errorPast}
        draftLoading={!dataDraftMyEvents && !errorDraft}
      />
    </>
  )
}

export default MyEvents