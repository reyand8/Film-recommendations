const axios = require('axios');

const { Films } = require('./entities/Films');
const { API_KEY, API_BASE_URL } = require('../../config')

const getPopular = async (page, language) => {
    const result = await axios.get(
        `${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`
    );
    return new Films(result.data);
}

const getDetails = (id, language) => {
    return axios.get(
        `${API_BASE_URL}movie/${id}?api_key=${API_KEY}&language=${language}`
    );
}

const discoverFilm = async (filter, language) => {
    const result = await axios.get(`${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.adult}&release_date.gte=${filter.releaseDateGte}-01-01&release_date.lte=${filter.releaseDateLte}-01-01&with_genres=${filter.genre}`);
    return new Films(result.data);
}

const getFilmsBySearchQuery = async (search, language) => {
    const result = await axios.get(`${API_BASE_URL}search/movie?api_key=${API_KEY}&language=${language}&query=${search.query}&page=${search.page}`);
    return new Films(result.data);
}

const getFilmsByGenre = async (filter, language) => {
    const result = await axios.get(`${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&sort_by=${filter.sortBy}.${filter.sortDirection}&with_genres=${filter.genre}`);
    return new Films(result.data);
}

module.exports = {
    getPopular,
    getDetails,
    discoverFilm,
    getFilmsBySearchQuery,
    getFilmsByGenre,
}