import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'
import moment from 'moment'

const useGetEvents = (pageIndex, pageSize, dateFilter, typeFilter, categoryFilter, keyword) => {
  console.log('keyword', keyword)
  const dateNow = moment().format('YYYY-MM-DD')
  const defaultDatePath = `&dateStart_gte=${dateNow}`
  const datePath = dateFilter !== null ? `&dateStart_eq=${dateFilter}` : defaultDatePath
  const typePath = typeFilter !== null ? `&isOnlineEvent=${typeFilter}` : ''
  const categoryPath = categoryFilter !== null ? `&category.slug_eq=${categoryFilter}` : ''
  const keywordPath = keyword && (keyword !== null || keyword !== '') ? `&_q=${keyword}` : ''
  const basePath = `status=published${datePath}${typePath}${categoryPath}&_sort=dateStart:ASC${keywordPath}`
  const path = `/events?_start=${pageIndex}&_limit=${pageSize}&${basePath}`
  const pathCount = `/events/count?${basePath}`
  const url = config.api_url + path
  const urlCount = config.api_url + pathCount
  const getEventsSWR = useSWR(url, fetcher)
  const getEventsCountSWR = useSWR(urlCount, fetcher)
  const data = getEventsSWR.data
  const count = getEventsCountSWR.data
  
  return {
    ...getEventsSWR,
    data,
    count
  }
}

export { useGetEvents }