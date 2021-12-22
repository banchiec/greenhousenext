import UserServices from "../services/user.service"

export const existUser = async (session) => {
    const userServices = new UserServices()
    const { name, email, image } = session
    console.log(session.user.email)

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

}