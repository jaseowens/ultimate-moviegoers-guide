import { MovieSearchResult } from './tmdbDTO';
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

export const getPopularMovies = async (): Promise<MovieSearchResult[]> => {
    console.log('FETCHING');
    return await axios.get(POPULAR_URL, {
        params: {
            api_key: API_KEY,
            language: LANGUAGE
        }
    }).then(res => {
        if(res?.data?.results) {
            console.log(res.data.results);
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
            console.log(res.data.results);
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
            console.log(res.data.results);
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

