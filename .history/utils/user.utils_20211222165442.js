import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    const email = user?.email
    const name = user?.name
    const image = user?.image
    console.log(name, email, image)
    console.log(user)

    userServices.createUser(user)
        .then((data) => console.log(data))
        .catch(error => console.log(error))

}