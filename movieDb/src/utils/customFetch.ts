import axios from 'axios'

const baseUrl = 'https://moviesdatabase.p.rapidapi.com'

export const customFetch = axios.create({
  baseURL: baseUrl,
  headers: {
    'x-rapidapi-key': '0fd236bef3msh1e28990fef4fbd5p14a45ajsnb7cfd53c55c9',
    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
  },
})

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetchUser = axios.create({
  baseURL: productionUrl,
})
