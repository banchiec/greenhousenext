import UserServices from "../services/user.service"

export const existUser = async (user) => {
    await const userServices = new UserServices()
    userServices.createUser(user)
        .then((data) => console.log(data))
        .catch(error => console.log(error))

}