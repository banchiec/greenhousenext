import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    const User = { name, email, image }

    userServices.createUser(user)
        .then((data) => console.log(data))
        .catch(error => console.log(error))

}