import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";
import MovieList from "../Components/MovieList";
import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { NaviationPaths } from "../Helpers/Constants";

const useStyle = makeStyles((theme) => ({
    pageTitle: {
        marginBottom: theme.spacing(2),
        color: theme.palette.common.white
    }
}));

const TopRated = () => {
    const pageName = 'Top Rated';
    const [topRatedMovies, setTopRatedMovies] = useState<MovieSearchResult[]>([]);
    const history = useHistory();
    const style = useStyle();

    useEffect(() => {
        const fetchNowPlaying = async () => {
          setTopRatedMovies(await getTopRatedMovies());
        };
    
        fetchNowPlaying();
    }, []);

    const handleMovieSelect = (movie: MovieSearchResult) => {
        history.push(`${NaviationPaths.DETAILS}/${movie.id}`)
    }

    return (
        <>
            <Typography className={style.pageTitle} variant="h5"> {pageName} </Typography>
            <MovieList movies={topRatedMovies} handleSelect={handleMovieSelect}></MovieList>
        </>
    )
}


export default TopRated;