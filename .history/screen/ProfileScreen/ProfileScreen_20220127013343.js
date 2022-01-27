import GarmentCounter from "../../components/GarmentCounter/GarmentCounter"

const ProfileScreen = ({currentUser}) =>{
	return(
		<>
			<GarmentCounter favorites = {currentUser.favorites}/>
			<h1>Profile Screen</h1>
		</>
	)
}
export default ProfileScreen