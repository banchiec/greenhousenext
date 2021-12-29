import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    const { email } = user
    console.log(user?.email)
    console.log(email)

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

}