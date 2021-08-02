import Head from 'components/layouts/head'
import EventDetail from 'components/modules/events/eventDetail'
import Fallback from 'components/elements/fallback/fallback'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useGetDetailEvent } from 'modules/events/get-detail-event'
import Context from 'libs/context/context'


function DetailEvent() {
  const router = useRouter()
  const query = router.query
  // console.log(query);

  const { 
    setEventData
  } = Context.useContainer()

  const { data, error } = useGetDetailEvent(query.event_id)

  useEffect(() => {
    setEventData(data)
  }, [data])

  return (
    <>
      <Head title='Detail Events | Ventsity' />
      {
        (!data || data.length === 0) &&
        <Fallback title='Event not found' />
      }
      {
        !data && !error &&
        <Fallback title='Loading...' />
      }
      {
        (data && data.length > 0) &&
        <EventDetail
          dataEvent={data}
          loading={!data && !error}
        />
      }
    </>
  )
}

export default DetailEvent