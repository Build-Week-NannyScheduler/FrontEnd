import axios from "axios";

export default function axiosWithAuth() {

    return axios.create({
        baseURL: "https://nannytracker.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}