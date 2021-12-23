import { json } from "express"
import UserServices from "../services/user.service"

export const existUser = (user) => {
    const userServices = new UserServices()
    userServices.createUser(user)
        .then((data) => {
            return data
        })
        .catch(error => return json("Error"))

}