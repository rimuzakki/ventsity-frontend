import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import FullPageLoader from 'components/elements/fallback/fullPageLoader'

function PrivateRoute({ protectedRoutes, children }) {
  const router = useRouter()
  const [ session, loading ] = useSession()

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1

  useEffect(() => {
    if (!loading && !session && pathIsProtected) {
      router.push('/api/auth/signin')
    }
  }, [loading, session, pathIsProtected])

  if (( loading || !session) && pathIsProtected) {
    return <FullPageLoader />
  }

  return children
}

export default PrivateRoute