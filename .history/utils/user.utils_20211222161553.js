import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    const { name, email, image, } = user
    console.log(name, email, image)

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

    console.log(user)
}