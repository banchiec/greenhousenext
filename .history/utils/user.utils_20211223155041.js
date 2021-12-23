
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser = null

export const isUser = (user) => {

    const userServices = new UserServices()

    userServices.createUser(user)
        .then((data) => {
            currentUser = data.data.user
            return currentUser
        })
        .catch(error => console.log(error))
    console.log(currentUser)
    return currentUser

}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}