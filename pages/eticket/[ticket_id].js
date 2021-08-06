import Head from 'components/layouts/head'
import Fallback from 'components/elements/fallback/fallback'
import EticketWrapper from 'components/modules/tickets/eticketWrapper'
import { useGetTicketsById } from 'modules/tickets/get-tickets-by-id'
import { useRouter } from 'next/router'

function TicketId() {
  const router = useRouter()
  const query = router.query

  const { data, error } = useGetTicketsById(query.ticket_id)

  return (
    <>
      <Head title='E-Ticket | Ventsity' />

      {
        (!data || data.length === 0) &&
        <Fallback title='Ticket not found' />
      }
      {
        !data && !error &&
        <Fallback title='Loading...' />
      }
      {
        (data && data.length > 0) &&
        <EticketWrapper
          dataTicket={data}
        />
      }
    </>
  )
}

export default TicketId