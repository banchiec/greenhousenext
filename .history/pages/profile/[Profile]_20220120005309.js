import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { name } = router.query
  console.log(router.query)

  return <p>Post: {name}</p>
}

export default Profile