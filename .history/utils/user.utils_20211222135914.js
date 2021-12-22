import UserServices from "../services/user.service"

export const existUser = (gmail) => {
    const userServices = new UserServices()
    {
        userServices.createUser()
    }
    console.log(gmail)
}