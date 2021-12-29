import UserServices from "../services/user.service"

export const isUser = (user) => {

    const userServices = new UserServices()
    let usser = {}
    userServices.createUser(user)
        .then((data) => {
            console.log(data.data.user)
            usser = data.data.user
        })
        .catch(error => console.log(error))
    return usser
}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}