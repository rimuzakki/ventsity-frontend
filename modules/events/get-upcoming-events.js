import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'
import moment from 'moment'

const useGetUpcomingEvents = () => {
  const dateNow = moment().format('YYYY-MM-DD')
  const path = `/events?status=published&dateEnd_gt=${dateNow}&_sort=dateStart:ASC&_limit=8`
  const url = config.api_url + path
  const getUpcomingEventsSWR = useSWR(url, fetcher)
  const data = getUpcomingEventsSWR.data
  return {
    ...getUpcomingEventsSWR,
    data
  }
}

export { useGetUpcomingEvents }