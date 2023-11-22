import axios from "axios"
 const url = "https://api.github.com/search/repositories"
const getData = (search,sort) => {
       return axios
        .get(`${url}?q="${search}&sort=${sort}`)
}

export {getData}