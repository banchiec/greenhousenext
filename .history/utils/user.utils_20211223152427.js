import { useState } from "react"
import UserServices from "../services/user.service"

export const isUser = (user) => {

    const userServices = new UserServices()
    const [newUser, setNewUser] = useState()
    let usser = {}
    userServices.createUser(user)
        .then((data) => {
            setNewUser(data.data.user)
            usser = data.data.user
        })
        .catch(error => console.log(error))
    return usser
}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}