import UserServices from "../services/user.service"

export const existUser = (user) => {
    const userServices = new UserServices()
    userServices.createUser(user)
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => console.log(error))
}
export const getUser = () => {
    const userServices = new UserServices()
    userServices.findOne
}