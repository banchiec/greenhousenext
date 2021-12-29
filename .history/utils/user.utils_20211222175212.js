import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    await userServices.createUser(user)
        .then((data) => {
            return data
        })

}