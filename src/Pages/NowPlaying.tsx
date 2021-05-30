import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";
import MovieList from "../Components/MovieList";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    pageTitle: {
        marginBottom: theme.spacing(3),
        color: theme.palette.common.white
    }
}));

const NowPlaying = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieSearchResult[]>([]);
    const pageName = 'Now Playing';
    const style = useStyle();

    useEffect(() => {
        const fetchNowPlaying = async () => {
          setNowPlayingMovies(await getNowPlayingMovies());
        };
    
        fetchNowPlaying();
    }, []);

    return (
        <Container>
            <Typography className={style.pageTitle} variant="h4"> {pageName} </Typography>
            <MovieList movies={nowPlayingMovies}></MovieList>
        </Container>
    )
}

export default NowPlaying;