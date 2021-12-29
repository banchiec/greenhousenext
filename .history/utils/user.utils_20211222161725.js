import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    console.log(user)

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

    console.log(user)
}