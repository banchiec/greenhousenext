import { useState } from "react"
import UserServices from "../services/user.service"

export const isUser = (user) => {

    const userServices = new UserServices()
    let usser = {}
    userServices.createUser(user)
        .then((data) => {
            usser = [...data.data.user]
        })
        .catch(error => console.log(error))
    console.log(usser)
}

export const getCurrentUser = (gmail) => {
    const userService = new UserServices()
}