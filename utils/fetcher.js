// import { useSession } from 'next-auth/client'
import axios from 'axios'

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5MTA3NDcxLCJleHAiOjE2MjE2OTk0NzF9.zz1biUObbQSmeKIFMyaXabGwXl8Vdeqxy8Hd62NXlks'
// fetch API that mainly used in /module to call API
const fetcher = (...args) => 
  // const [ session, loading ] = useSession()
  // let token = session && session.jwt
  
  axios.get(...args)
    .then(res => res.data)
    // .then(res => {
    //   if(res.ok){
    //     return res.json()
    //   } else {
    //     return res
    //   }
    // })
    // .catch(err => {
    //   console.log(err)
    // })

  

export default fetcher