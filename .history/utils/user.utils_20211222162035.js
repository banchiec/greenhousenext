import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    console.log(session.user.email)

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

}