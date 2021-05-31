
import { MovieSearchResult } from "../Services/tmdbDTO";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import { POSTER_BASE_URL } from "../Services/tmdbAPI";
import { useScreenWidth } from "../Helpers/ScreenSize";

const useStyle = makeStyles((theme) => ({
    hover: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}));

const MovieList = (props: {movies: Array<MovieSearchResult>, handleSelect: any}) => {
    const breakpoint = useScreenWidth();
    const style = useStyle();

    const getCols = () => {
        if(breakpoint === 'xs') {
            return 4;
        } else if (breakpoint === 'sm') {
            return 4;
        } else if(breakpoint === 'md') {
            return 5;
        } else {
            return 5;
        }
    }

    const getCellHeight = () => {
        if(breakpoint === 'xs') {
            return 180;
        } else if (breakpoint === 'sm') {
            return 240;
        } else if(breakpoint === 'md') {
            return 300;
        } else {
            return 360;
        }
    }

    return (
        <GridList cellHeight={getCellHeight()} cols={getCols()}>
            {props.movies.map((movie) => (
                <GridListTile className={style.hover} cols={1} onClick={() => props.handleSelect(movie)}>
                    <img src={POSTER_BASE_URL + movie.poster_path} alt={movie.title} height="auto" width="100%" />
                </GridListTile>
            ))}
      </GridList>
    );
}

export default MovieList;