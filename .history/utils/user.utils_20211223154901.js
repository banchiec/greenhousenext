
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser

export const isUser = (user) => {

    const userServices = new UserServices()

    userServices.createUser(user)
        .then((data) => {
            currentUser = data?.data.user
            return currentUser
        })
        .catch(error => console.log(error))
    return "suputamadre"

}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}