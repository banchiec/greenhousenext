import { useState } from "react"
import UserServices from "../services/user.service"

export const existUser = (user) => {
    const userServices = new UserServices()
    const [service, setService] = useState([])
    let dataUser
    userServices.createUser(user)
        .then((data) => {
            dataUser = data
        })
        .catch(error => console.log(error))
}

export const getUser = (user) => {
    const currentUser = user
}