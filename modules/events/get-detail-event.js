import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'

const useGetDetailEvent = (endUrl) => {
  const path = `/events?endUrl=${endUrl}`
  const url = config.api_url + path
  const getDetailEventSWR = useSWR(url, fetcher)
  const data = getDetailEventSWR.data
  return {
    ...getDetailEventSWR,
    data
  }
}

export { useGetDetailEvent }