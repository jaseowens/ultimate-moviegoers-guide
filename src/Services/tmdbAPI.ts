import axios from "axios";

const LANGUAGE = 'en_US';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '30e90b28087c0404cd1f0809b38279aa';
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/original';

const UPCOMING_URL = `${API_BASE_URL}/movie/upcoming`;

export const getTrendingMovies = async (): Promise<Movie[]> => {
    console.log('FETCHING');
    return await axios.get(UPCOMING_URL, {
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

export interface Movie {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: Array<number>;
    id?: number;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
  }
