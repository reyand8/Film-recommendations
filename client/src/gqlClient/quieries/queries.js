import { gql } from '@apollo/client';


export const FILMS_BY_FILTER_QUERY = gql`
    query Films($filter: FilmsFilterInput) {
        filmsByFilter(filter: $filter) {
            page
            totalResults
            totalPages
            results {
                id
                title
                adult
                voteAverage
                image: posterPath
                releaseDate(format: "MMMM yyyy")
            }
        }
    }
`;

export const FILMS_BY_POPULARITY_QUERY = gql`
    query Films($page: Int) {
        filmsByPopularity(page: $page) {
            page
            totalResults
            totalPages
            results {
                id
                title
                adult
                voteAverage
                genres {
                    id
                    name
                }
                image: posterPath
                releaseDate(format: "MMMM yyyy")
            }
        }
    }
`;

export const GENRES_QUERY = gql`
    query Genres {
        genres {
            id
            name
        }
    }
`;

export const FILMS_BY_SEARCH_QUERY = gql`
    query Films($search: FilmsSearchInput) {
        filmsBySearchQuery(search: $search) {
            page
            totalResults
            totalPages
            results {
                id
                title
                adult
                voteAverage
                image: posterPath
                releaseDate(format: "MMMM yyyy")
            }
        }
    }
`;

export const FILM_DETAILS_QUERY = gql`
    query FilmsById($ids: [Int]) {
        filmsById(ids: $ids) {
            id
            title
            adult
            overview
            voteAverage
            runtime
            image: posterPath
            releaseDate(format: "dd.MM.yyyy")
            production {
                iso_3166_1,
                name
            }
            genres {
                id
                name
            }
        }
    }
`;

export const FILMS_BY_ID_QUERY = gql`
    query FilmsById($ids: [Int]) {
        filmsById(ids: $ids) {
            id
            title
            adult
            voteAverage
            image: posterPath
            releaseDate(format: "dd.MM.yyyy")
        }
    }
`;

export const FILMS_BY_GENRE_QUERY = gql`
    query Films($filter: FilmsFilterInput) {
        filmsByGenre(filter: $filter) {
            page
            totalResults
            totalPages
            results {
                id
                title
                adult
                voteAverage
                image: posterPath
                releaseDate(format: "MMMM yyyy")
            }
        }
    }
`;

export const GET_USER = gql `
    query GetUser {
        user {
            id
            username
            email
            image
        }
    }
`;