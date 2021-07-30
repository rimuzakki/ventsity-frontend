import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'
import moment from 'moment'

const useGetEventsByKeyword = (keyword) => {
  const dateNow = moment().format('YYYY-MM-DD')
  const path = `/events?status=published&dateEnd_gte=${dateNow}&_sort=dateStart:ASC&_q=${keyword}`
  const url = config.api_url + path
  const getEventsByKeywordSWR = useSWR(url, fetcher)
  const data = getEventsByKeywordSWR.data
  return {
    ...getEventsByKeywordSWR,
    data
  }
}

export { useGetEventsByKeyword }