import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";
import MovieList from "../Components/MovieList";
import { Typography } from "@material-ui/core";

const TopRated = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<MovieSearchResult[]>([]);
    const pageName = 'Top Rated';

    useEffect(() => {
        const fetchNowPlaying = async () => {
          setTopRatedMovies(await getTopRatedMovies());
        };
    
        fetchNowPlaying();
    }, []);

    return (
        <>
            <Typography variant="h4"> {pageName} </Typography>
            <MovieList movies={topRatedMovies}></MovieList>
        </>
    )
}


export default TopRated;