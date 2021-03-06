import { MovieDetails, MovieSearchResult, ProviderResult } from './tmdbDTO';
import axios from "axios";

const LANGUAGE = 'en_US';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '30e90b28087c0404cd1f0809b38279aa';
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/original';

// https://developers.themoviedb.org/3/movies/get-popular-movies
const POPULAR_URL = `${API_BASE_URL}/movie/popular`;

// https://developers.themoviedb.org/3/movies/get-now-playing
const NOW_PLAYING_URL = `${API_BASE_URL}/movie/now_playing`;

// https://developers.themoviedb.org/3/movies/get-top-rated-movies
const TOP_RATED_URL = `${API_BASE_URL}/movie/top_rated`;

// https://developers.themoviedb.org/3/movies/get-movie-details
const DETAILS_URL = `${API_BASE_URL}/movie/`

// https://developers.themoviedb.org/3/search/search-movies
const SEARCH_URL = `${API_BASE_URL}/search/movie`;

// https://developers.themoviedb.org/3/movies/get-movie-watch-providers
const WATCH_PROVIDERS_URL_PRE = `${API_BASE_URL}/movie/`;
const WATCH_PROVIDERS_URL_POST = '/watch/providers';

export const getPopularMovies = async (): Promise<MovieSearchResult[]> => {
    return await axios.get(POPULAR_URL, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE
        }
    }).then(res => {
        if(res?.data?.results) {
            return res.data.results;
        } else {
            return [];
        }
    }).catch(err => {
        console.log('ERR! ');
        console.log(err);
        return [];
    });
}

export const getNowPlayingMovies = async (): Promise<MovieSearchResult[]> => {
    return await axios.get(NOW_PLAYING_URL, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE
        }
    }).then(res => {
        if(res?.data?.results) {
            return res.data.results;
        } else {
            return [];
        }
    }).catch(err => {
        console.log('ERR! ');
        console.log(err);
        return [];
    });
}

export const getTopRatedMovies = async (): Promise<MovieSearchResult[]> => {
    return await axios.get(TOP_RATED_URL, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE
        }
    }).then(res => {
        if(res?.data?.results) {
            return res.data.results;
        } else {
            return [];
        }
    }).catch(err => {
        console.log('ERR! ');
        console.log(err);
        return [];
    });
}

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
    return await axios.get(DETAILS_URL + id, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE
        }
    }).then(res => {
        if(res?.data) {
            return res.data;
        } else {
            return {};
        }
    }).catch(err => {
        console.log('ERR! ');
        console.log(err);
        return {};
    });
}

export const getSearchResults = async (searchTerm: string): Promise<MovieSearchResult[]> => {
    return await axios.get(SEARCH_URL, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE,
            query: searchTerm
        }
    }).then(res => {
        if(res?.data?.results) {
            return res.data.results;
        } else {
            return {};
        }
    }).catch(err => {
        console.log('ERR! ');
        console.log(err);
        return {};
    });
}

export const getWatchProviders = async (id: number): Promise<ProviderResult> => {
    return await axios.get(WATCH_PROVIDERS_URL_PRE + id + WATCH_PROVIDERS_URL_POST, {
        params: {
            api_key: API_KEY,
        }
    }).then(res => {
        if(res?.data?.results?.US) {
            return res.data.results.US;
        } else {
            return {};
        }
    }).catch(err => {
        console.log('ERR! ');
        console.log(err);
        return {};
    });
}
