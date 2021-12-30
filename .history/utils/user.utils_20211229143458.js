
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser = null

export const isUser = async (user) => {

    let newUser
    const userServices = new UserServices()
    try {
        const currentUser = await userServices.createUser(user)
        newUser = currentUser.data.user

        console.log(newUser)

    } catch (error) {
        return console.log(error)
    }
    return newUser
}
