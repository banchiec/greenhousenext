import UserServices from "../services/user.service"

export const existUser = async (gmail) => {

    const userServices = new UserServices()

    const allUsers = await userServices.getUsers()

    console.log(allUsers)
    console.log(gmail)
}