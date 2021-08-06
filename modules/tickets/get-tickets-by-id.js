import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'

const useGetTicketsById = (eventId) => {
  const path = `/tickets?ticketId=${eventId}`
  const url = config.api_url + path
  const getTicketsByIdSWR = useSWR(url, fetcher)
  const data = getTicketsByIdSWR.data
  return {
    ...getTicketsByIdSWR,
    data
  }
}

export { useGetTicketsById }