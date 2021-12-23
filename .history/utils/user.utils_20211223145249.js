import UserServices from "../services/user.service"

export const istUser = (user) => {

    const userServices = new UserServices()
    const dataUser = []
    userServices.createUser(user)
        .then((data) => {
            dataUser = data
        })
        .catch(error => console.log(error))
    return dataUser

}

export const getUser = (user) => {
    const currentUser = user
}