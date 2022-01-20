import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { username } = router.query
  // console.log(router.query)

  return <p>Post: {username}</p>
}

export default Profile