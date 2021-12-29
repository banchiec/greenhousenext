
import { useState } from "react"
import UserServices from "../services/user.service"

let currentUser = null

export const isUser = async (user) => {

    const userServices = new UserServices()
    try {
        const currentUser = await userServices.createUser(user)
        console.log(currentUser)

    } catch (error) {

    }

    // await userServices.createUser(user)
    //     .then((data) => {
    //         currentUser = data.data.user
    //     })
    //     .catch(error => console.log(error))
}
