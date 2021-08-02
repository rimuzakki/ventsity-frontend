import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'

const useGetTicketsByEvent = (eventId) => {
  const path = `/tickets?event.id=${eventId}`
  const url = config.api_url + path
  const getTicketsByEventSWR = useSWR(url, fetcher)
  const data = getTicketsByEventSWR.data
  return {
    ...getTicketsByEventSWR,
    data
  }
}

export { useGetTicketsByEvent }