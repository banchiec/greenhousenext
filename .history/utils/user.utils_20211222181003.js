import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()

    const newUser = await userServices.createUser(user)
    return newUser;
}