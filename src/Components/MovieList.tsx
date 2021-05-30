
import { MovieSearchResult } from "../Services/tmdbDTO";
import { GridList, GridListTile, Theme, useMediaQuery } from "@material-ui/core";
import { POSTER_BASE_URL } from "../Services/tmdbAPI";

const MovieList = (props: {movies: Array<MovieSearchResult>}) => {
    const xs: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.only('xs'));
    const sm: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.only('sm'));
    const md: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.only('md'));

    // Definitions for extra small, small and medium screen sizes, anything above medium is defaulted to 5 columns.
    const getCols = () => {
        if(xs) {
            return 2;
        } else if (sm) {
            return 3;
        } else if(md) {
            return 4;
        } else {
            return 5;
        }
    }

    return (
        <GridList cellHeight={360} cols={getCols()}>
            {props.movies.map((movie) => (
            <GridListTile key={movie.id} cols={1}>
                <img src={POSTER_BASE_URL + movie.poster_path} alt={movie.title} height="auto" width="100%" />
            </GridListTile>
            ))}
      </GridList>
    );
}

export default MovieList;