import fetcher from 'utils/fetcher'
import useSWR from 'swr'
import config from 'config'

const useGetUserByAuth = (authId) => {
  const path = '/users/me'
  const url = config.api_url + path
  const getUserByAuthSWR = useSWR(url, fetcher)
  const data = getUserByAuthSWR.data
  return {
    ...getUserByAuthSWR,
    data
  }
}

export { useGetUserByAuth }