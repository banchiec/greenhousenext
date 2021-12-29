import UserServices from "../services/user.service"

export const existUser = (user) => {
    const userServices = new UserServices()
    await userServices.createUser(user)
        .then((data) => {
            return data
        })
        .catch(error => console.log(error))

}