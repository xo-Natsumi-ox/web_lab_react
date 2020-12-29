import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
    }
});

export async function getClothes() {
    return (await instance.get('/clothes')).data;
}

export async function getClothesById(id) {
    return (await instance.get(`/clothes/${id}`)).data;
}

export async function getFilteredClothes(price, size, gender) {
    return (await instance.get(`/clothes/filter?price=${price}&size=${size}&gender=${gender}`)).data;
}

export async function loginUser(email, password) {
    return (await instance.post(`/user/login`, {email: email, password: password})).data;
}

export async function registerUser(username, email, password) {
    return (await instance.post(`/user/register`, {username: username, email: email, password: password})).data;
}

export async function didUserLogin(loggedInValue) {
    return (await instance.post(`/user/check_logged_in`, {loggedInValue: loggedInValue})).data;
}

