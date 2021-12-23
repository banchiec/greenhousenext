import { useState } from "react"
import UserServices from "../services/user.service"

export const isUser = async (user) => {

    const userServices = new UserServices()

    await userServices.createUser(user)
        .then((data) => {
            return data.data.user
        })
        .catch(error => console.log(error))
}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}