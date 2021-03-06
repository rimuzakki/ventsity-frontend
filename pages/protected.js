import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import MainLayout from 'components/layouts/mainLayout'
import AccessDenied from 'components/layouts/access-denied'

export default function Page () {
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()

  // Fetch content from protected route
  useEffect(()=>{
    // const fetchData = async () => {
    //   const res = await fetch('/api/examples/protected')
    //   const json = await res.json()
    //   if (json.content) { setContent(json.content) }
    // }
    // fetchData()
    setContent('This is protected content. You can access this content because you are signed in.')
  },[session])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) { return  <Layout><AccessDenied/></Layout> }

  // If session exists, display content
  return (
    <MainLayout>
      <h1>Protected Page</h1>
      <p><strong>{content || "\u00a0"}</strong></p>
    </MainLayout>
  )
}