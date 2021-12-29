import UserServices from "../services/user.service"

export const existUser = async (gmail) => {

    const userServices = new UserServices()

    const allUsers = userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

    console.log(allUsers)
    console.log(gmail)
}