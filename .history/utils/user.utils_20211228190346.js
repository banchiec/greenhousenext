
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser = null

export const isUser = async (user) => {

    const userServices = new UserServices()

    await userServices.createUser(user)
        .then((data) => {
            // console.log(data.data.user)
            currentUser = data.data.user
        })
        .catch(error => console.log(error))
    return currentUser
}
