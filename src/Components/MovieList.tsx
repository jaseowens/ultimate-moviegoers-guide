
import { MovieSearchResult } from "../Services/tmdbDTO";
import { Grid, makeStyles } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { POSTER_BASE_URL } from "../Services/tmdbAPI";

const useStyle = makeStyles((theme) => ({
    hover: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    image: {
        backgroundColor: theme.palette.grey[400],
        width: '100%',
        height: '100%',
        minHeight: '250px',
        objectFit: 'cover',
    },
    imageAlt: {
        backgroundColor: theme.palette.grey[100],
    },
    skeleton: {
        width: '100%',
        height: '0px',
        boxSizing: 'content-box',
        paddingBottom: '150%', 
    }
}));

const MovieList = (props: {movies: Array<MovieSearchResult>, handleSelect: any}) => {
    const style = useStyle();

    return (
        <Grid container spacing={2}>
            { (props.movies && props.movies.length > 0) ?
                props.movies.map((movie) => (
                    <Grid item key={movie.id} className={style.hover} xs={6} sm={4} md={3} lg={2} xl={2} onClick={() => props.handleSelect(movie)}>
                        {movie.poster_path ?
                            <img className={style.image} src={POSTER_BASE_URL + movie.poster_path} alt={movie.title} /> :
                            <Skeleton className={style.skeleton} animation={false} variant="rect"/>
                        }
                    </Grid>
                ))
                :
                [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((id) => (
                    <Grid item key={id} xs={6} sm={4} md={3} lg={2} xl={2}>
                          <Skeleton className={style.skeleton} animation={'wave'} variant="rect"/>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default MovieList;