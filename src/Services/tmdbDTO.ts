
export interface MovieSearchResult {
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

export interface ProviderResult {
    link: string,
    rent: Provider[],
    buy: Provider[],
    flatrate: Provider[]
}

export interface Provider {
    display_priority?: number,
    logo_path?: string,
    provider_id?: number,
    provider_name: string
}

export interface Genre {
    id: number,
    name: string
}

export interface ProductionCompany {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string,
    name: string
}

export interface SpokenLanguage {
    iso_639_1: string,
    name: string
}

export interface MovieDetails {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: any,
    budget: number,
    genres: Genre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompany[],
    production_countries: ProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: SpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}