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

export const getUser = (user) => {
    const currentUser = user
    console.log(curentUser)
}