import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";
import MovieList from "../Components/MovieList";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { NaviationPaths } from "../Helpers/Constants";

const useStyle = makeStyles((theme) => ({
    pageTitle: {
        marginBottom: theme.spacing(2),
        color: theme.palette.common.white
    }
}));

const NowPlaying = () => {
    const pageName = 'Now Playing';
    const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieSearchResult[]>([]);
    const style = useStyle();
    const history = useHistory();

    useEffect(() => {
        const fetchNowPlaying = async () => {
          setNowPlayingMovies(await getNowPlayingMovies());
        };
    
        fetchNowPlaying();
    }, []);

    const handleMovieSelect = (movie: MovieSearchResult) => {
        history.push(`${NaviationPaths.DETAILS}/${movie.id}`)
    }

    return (
        <Container>
            <Typography className={style.pageTitle} variant="h5"> {pageName} </Typography>
            <MovieList movies={nowPlayingMovies} handleSelect={handleMovieSelect}></MovieList>
        </Container>
    )
}

export default NowPlaying;