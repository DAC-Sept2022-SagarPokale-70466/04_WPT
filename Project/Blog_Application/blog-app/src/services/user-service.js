import { MYAXIOIS } from "./helper";

export const singup = (user) => {

    return MYAXIOIS.post('/auth/register', user).then((response) => response.data)
}

export const loginUser = (loginDetails) => {
    // debugger
    return MYAXIOIS.post('/auth/login', loginDetails).then((response) => response.data)
}

export const getUser = (userId) => {
    return MYAXIOIS.get(`/users/${userId}`).then((resp) => resp.data)
}