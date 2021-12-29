import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()

    const user = await userServices.createUser(user)
    return user;
}