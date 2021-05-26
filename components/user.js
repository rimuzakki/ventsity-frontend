import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import fetcher from 'utils/fetcher'
import useSWR from 'swr'
import config from 'config'

export default function User() {
  // const [ session, loading ] = useSession()
  // let token = session && session.jwt
  // console.log(token)

  // const [data, setData] = useState()

  // useEffect(() => {
  //   fetch(`http://localhost:1337/users/me`, {
  //     headers: {
  //       Authorization: `bearer ${token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  // });

  const path = '/tests'
  const url = config.api_url + path
  const { data, error } = useSWR(url, fetcher)
  console.log("🚀 ~ file: user.js ~ line 30 ~ User ~ data", data)
  console.log("🚀 ~ file: user.js ~ line 30 ~ User ~ error", error)


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
    {JSON.stringify(data, null, 2)}
    </>
  )

}