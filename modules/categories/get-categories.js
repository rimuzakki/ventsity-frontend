import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'

const useGetCategories = () => {
  const path = '/categories'
  const url = config.api_url + path
  const getCategoriesSWR = useSWR(url, fetcher)
  const data = getCategoriesSWR.data
  return {
    ...getCategoriesSWR,
    data
  }
}

export { useGetCategories }