import { useState } from "react"
import UserServices from "../services/user.service"

const currentUser = {}

export const isUser = (user) => {

    const userServices = new UserServices()

    userServices.createUser(user)
        .then((data) => {
            console.log(data.data.user)
            currentUser = data?.data.user
            return currentUser
        })
        .catch(error => console.log(error))
}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}