import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'
import moment from 'moment'
import { useSession } from 'next-auth/client'

const dateNow = moment().format('YYYY-MM-DD')

const useGetOngoingMyEvents = () => {
  const [ session, loadingSession ] = useSession()
  const loggedUserId = session?.id
  const path = `/events?creator.id=${loggedUserId}&status=published&dateEnd_gte=${dateNow}&_sort=dateStart:ASC`
  const url = config.api_url + path
  const getOngoingMyEventsSWR = useSWR(url, fetcher)
  const data = getOngoingMyEventsSWR.data
  return {
    ...getOngoingMyEventsSWR,
    data
  }
}

const useGetPastMyEvents = () => {
  const [ session, loadingSession ] = useSession()
  const loggedUserId = session?.id
  const path = `/events?creator.id=${loggedUserId}&status=published&dateEnd_lte=${dateNow}&_sort=dateStart:ASC`
  const url = config.api_url + path
  const getPastMyEventsSWR = useSWR(url, fetcher)
  const data = getPastMyEventsSWR.data
  return {
    ...getPastMyEventsSWR,
    data
  }
}

const useGetDraftMyEvents = () => {
  const [ session, loadingSession ] = useSession()
  const loggedUserId = session?.id
  const path = `/events?creator.id=${loggedUserId}&status=draft&_sort=dateStart:ASC`
  const url = config.api_url + path
  const getDraftMyEventsSWR = useSWR(url, fetcher)
  const data = getDraftMyEventsSWR.data
  return {
    ...getDraftMyEventsSWR,
    data
  }
}

export { useGetOngoingMyEvents, useGetPastMyEvents, useGetDraftMyEvents }