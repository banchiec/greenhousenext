import UserServices from "../services/user.service"

export const isUser = (user) => {

    const userServices = new UserServices()
    const usser = {}
    const dataUser = []
    userServices.createUser(user)
        .then((data) => {
            usser = data.user
        })
        .catch(error => console.log(error))
    return usser
}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}