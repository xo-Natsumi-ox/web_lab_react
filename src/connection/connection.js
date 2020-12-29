import axios from 'axios';

const baseRequest = axios.create({
    baseURL: 'http://127.0.0.1:8090/clothes',
    headers: {
        'Content-Type': 'application/json'
         
    }
});

export async function getClothes() {
    return (await baseRequest.get()).data;
}

export async function getClothesById(id) {
    return (await baseRequest.get(`${id}`)).data;
}

export async function getFilteredClothes(size, forWomMan) {
    return (await baseRequest.get(`/filters?size=${size}&forWomMan=${forWomMan}`)).data;
}
