import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'
import moment from 'moment'
import { useSession } from 'next-auth/client'

const dateNow = moment().format('YYYY-MM-DD')

const useGetMyTicketsOngoing = () => {
  const [ session, loadingSession ] = useSession()
  const loggedUserId = session?.id

  const path = `/tickets?user.id=${loggedUserId}&event.dateEnd_gte=${dateNow}&_sort=created_at:ASC`
  const url = config.api_url + path
  const getMyTicketsOngoingSWR = useSWR(url, fetcher)
  const data = getMyTicketsOngoingSWR.data
  return {
    ...getMyTicketsOngoingSWR,
    data
  }
}

const useGetMyTicketsPast = () => {
    const [ session, loadingSession ] = useSession()
    const loggedUserId = session?.id
  
    const path = `/tickets?user.id=${loggedUserId}&event.dateEnd_lte=${dateNow}&_sort=created_at:ASC`
    const url = config.api_url + path
    const getMyTicketsPastSWR = useSWR(url, fetcher)
    const data = getMyTicketsPastSWR.data
    return {
      ...getMyTicketsPastSWR,
      data
    }
}

export { useGetMyTicketsOngoing, useGetMyTicketsPast }