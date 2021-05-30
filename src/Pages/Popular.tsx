import { useEffect, useState } from "react";
import { getPopularMovies } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";
import MovieList from "../Components/MovieList";
import { Typography } from "@material-ui/core";

const Popular = () => {
    const [popularMovies, setPopularMovies] = useState<MovieSearchResult[]>([]);
    const pageName = 'Popular';

    useEffect(() => {
        const fetchNowPlaying = async () => {
          setPopularMovies(await getPopularMovies());
        };
    
        fetchNowPlaying();
    }, []);

    return (
        <>
            <Typography variant="h4"> {pageName} </Typography>
            <MovieList movies={popularMovies}></MovieList>
        </>
    )
}

export default Popular;