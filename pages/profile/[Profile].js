import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'

const Profile = (props) => {
  const router = useRouter()
  const { username } = router.query
  console.log(router.query)
  console.log(props)

  return(
    <div>
      <Navbar/>
      <p>Post: {username}</p>
    </div>
  ) 
}

export default Profile