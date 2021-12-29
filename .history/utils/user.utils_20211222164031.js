import UserServices from "../services/user.service"

export const existUser = async (user) => {
    const userServices = new UserServices()
    const email = user?.email
    const name = user?.name
    const image = user?.image
    console.log(user?.name)

    userServices.createUser({ name, email, image })
        .then((data) => console.log(data))
        .catch()

}