import GarmentCounter from "../../components/GarmentCounter/GarmentCounter"

const ProfileScreen = ({currentUser}) =>{
	return(
		<>
			<GarmentCounter favorites = {currentUser?.favorites}/>
		</>
	)
}
export default ProfileScreen