
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser = null

export const isUser = async (user) => {

    const userServices = new UserServices()

    await userServices.createUser(user)
        .then((data) => {
            currentUser = data.data.user
            return currentUser
        })
        .catch(error => console.log(error))

    return currentUser

}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}