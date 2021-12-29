import UserServices from "../services/user.service"

export const existUser = async (gmail) => {

    const userServices = new UserServices()

    userServices.getUsers()
        .then((data) => console.log(data))
        .catch(error => console.log(error))

    console.log(gmail)
}