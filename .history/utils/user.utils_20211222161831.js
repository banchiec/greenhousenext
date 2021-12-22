import UserServices from "../services/user.service"

export const existUser = async (session) => {
    const userServices = new UserServices()
    const { name, email, image } = session?.user
    console.log()

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

    console.log(user)
}