
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser = null

export const isUser = (user) => {

    const userServices = new UserServices()

    userServices.createUser(user)
        .then((data) => {
            return currentUser
        })
        .catch(error => console.log(error))
    return currentUser

}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}