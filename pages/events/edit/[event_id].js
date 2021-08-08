import Head from 'components/layouts/head'
import CreateEventWrapper from 'components/modules/events/createEventWrapper'
import Fallback from 'components/elements/fallback/fallback'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useGetDetailEvent } from 'modules/events/get-detail-event'
import Context from 'libs/context/context'

function EditEventPage() {
  const router = useRouter()
  const query = router.query

  const { 
    setEventData
  } = Context.useContainer()

  const { data, error } = useGetDetailEvent(query.event_id)

  useEffect(() => {
    setEventData(data)
  }, [data])

  return (
    <>
      <Head title='Edit Event | Ventsity' />
      {
        !data && !error &&
        <Fallback title='Loading...' />
      }
      {
        (!data || data.length === 0) &&
        <Fallback title='Event not found' />
      }
      {
        (data && data.length > 0) &&
        <CreateEventWrapper
          dataEvent={data[0]}
          loading={!data && !error}
        />
      }
      
    </>
  )
}

export default EditEventPage