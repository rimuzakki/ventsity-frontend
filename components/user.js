import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'

export default function User() {
  const [ session, loading ] = useSession()
  let token = session && session.jwt
  console.log(token)

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`http://localhost:1337/users/me`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  });

  return (
    <>
    {JSON.stringify(data, null, 2)}
    </>
  )

}