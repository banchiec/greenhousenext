import UserServices from "../services/user.service"

export const isUser = (user) => {

    const userServices = new UserServices()
    const dataUser = []
    userServices.createUser(user)
        .then((data) => {
            return data
        })
        .catch(error => console.log(error))
}

export const getCurrentUser = (gmail) => {
    const currentUser = user
}