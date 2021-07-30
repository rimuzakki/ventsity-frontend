import fetcher from 'libs/utils/fetcher'
import useSWR from 'swr'
import config from 'config'
import { useSession } from 'next-auth/client'


const useGetUserByAuth = (authId) => {
  const [ session, loading ] = useSession()

  const path = '/users/me'
  const url = config.api_url + path
  const getUserByAuthSWR = useSWR(session !== null ? url : null, fetcher)
  const data = getUserByAuthSWR.data
  return {
    ...getUserByAuthSWR,
    data
  }
}

export { useGetUserByAuth }