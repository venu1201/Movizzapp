import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjNjNzcwMjllZjA3NjQ2ZTk0NzFhY2E2NjExOGQ4MSIsInN1YiI6IjY0ODg5NDg0ZTM3NWMwMDBmZjRhMzA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YwkLscBdaz3IyhuSxEngGV9JPoQjjH0yK1IVQDwLi4g";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};