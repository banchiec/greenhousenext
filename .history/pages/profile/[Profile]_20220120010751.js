import { useRouter } from 'next/router'

const Profile = (props) => {
  const router = useRouter()
  const { username } = router.query
  console.log(router.query)
  console.log(props)

  return(

  <p>Post: {username}</p>
  ) 

}

export default Profile