import { POSTER_BASE_URL } from "../../Services/tmdbAPI";
import { MovieDetails } from "../../Services/tmdbDTO";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useScreenWidth } from "../../Helpers/ScreenSize";
import GenreBubbles from "../GenreBubbles";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyle = makeStyles((theme) => ({
    backdrop: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        width: '100%',
        height: '80vh'
    },    
    mainSection: {
        marginTop: '-45vh'
    },
    grid: {
        padding: theme.spacing(2)
    },
    pageTitle: {
        margin: theme.spacing(1),
        color: theme.palette.common.white,
    },
    poster: {
        width: '100%',
        height: 'auto',
        maxHeight: '60vh',
        borderRadius: '5px',
        borderColor: 'white',
        borderWidth: '1px',
        borderStyle: 'solid'
    },
    movieBrief: {
        padding: theme.spacing(2)
    },
    detailOverview: {
        margin: theme.spacing(2),
        display: 'flex'
    },
    runtime: {
        marginRight: theme.spacing(3),
        color: theme.palette.common.white
    },
    release: {
        color: theme.palette.common.white
    },
    red: {
        marginRight: theme.spacing(3),
        color: theme.palette.error.light
    },
    yellow: {
        marginRight: theme.spacing(3),
        color: theme.palette.warning.light
    },
    green: {
        marginRight: theme.spacing(3),
        color: theme.palette.success.light
    },
    skeleton: {
        width: '100%',
        height: '0px',
        boxSizing: 'content-box',
        paddingBottom: '150%', 
    }
}));

const DetailsTopHeader = (props: { movie: MovieDetails | undefined }) => {

    const style = useStyle();
    const breakpoint = useScreenWidth();

    // On small screens center content, on larger screens left align content
    const getJustify = () => {
        if (breakpoint === 'xs' || breakpoint === 'sm') {
            return 'center';
        } else {
            return 'flex-start';
        }
    }

    // Takes in a decimal and returns whole number plus pecentage sign
    // eg: 7.6 => '76%'
    const getVote = (vote: number | undefined) => {
        return vote ? String(vote*10) + '%' : '';
    }

    // Apply style to vote content based on how well the movie is rated
    const getVoteColor = (vote: number | undefined) => {
        if (!vote) return '';

        // Less than 65 === red
        if(vote < 6.5) {
            return style.red;
        // Less than 8 === yellow
        } else if (vote >= 6.5 && vote <= 8) {
            return style.yellow;
        // higher than 8 === green
        } else {
            return style.green;
        }
    }

    // Function found/converted from:
    // https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php#:~:text=JavaScript%20Code%3A,log(timeConvert(200))%3B
    const getRuntimeHours = (minutes: number) => {
        const hours = (minutes / 60);
        const roundHours = Math.floor(hours);
        const leftoverMinutes = (hours - roundHours) * 60;
        const roundLeftoverMinutes = Math.round(leftoverMinutes);
        return roundHours + `h ` + roundLeftoverMinutes + `m`;
    }

    const getReleaseYear = (date: string) => {
        return date.substr(0, 4);
    }

    return (
        <div>
        { (props?.movie && props.movie.id) 
        
        ? 
            <>
                <div 
                    className={style.backdrop}
                    style={{ 
                        backgroundImage: `linear-gradient(rgba(48,48,48,0), rgba(48,48,48,1)), url(${POSTER_BASE_URL}${props?.movie?.backdrop_path })`,
                    }}
                >
                </div>
                 <div className={style.mainSection}>

                     <Grid container justify={getJustify()} alignItems="center" className={style.grid}>
                         <Grid item xs={5} sm={5} md={3} lg={2} xl={2}>
                             <img className={style.poster} src={POSTER_BASE_URL + props?.movie?.poster_path} alt={props?.movie?.original_title} />
                         </Grid>
                         <Grid item className={style.movieBrief} xs={8} sm={8} md={9} lg={10} xl={10}>
                             <Typography style={(breakpoint === 'lg' || breakpoint === 'xl') ? {textAlign: 'left'} : {textAlign: 'center'}} className={style.pageTitle} variant="h3"> {props?.movie?.original_title} </Typography>
                             <GenreBubbles genres={props?.movie?.genres ? props?.movie.genres : []}></GenreBubbles>
                             <div className={style.detailOverview} style={(breakpoint === 'lg' || breakpoint === 'xl') ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}}>
                                 <Typography className={getVoteColor(props?.movie?.vote_average)} variant="h6"> {getVote(props?.movie?.vote_average)} </Typography>
                                 <Typography className={style.runtime} variant="h6"> {getRuntimeHours(props?.movie?.runtime)} </Typography>
                                 <Typography className={style.release} variant="h6"> {getReleaseYear(props?.movie?.release_date)} </Typography>
                             </div>
                         </Grid>
                     </Grid>

                 </div>
             </>
        
         :
             <>
                <Skeleton className={style.backdrop} animation={'wave'} variant="rect"></Skeleton>
             </>
         }

        </div>
    );
}

export default DetailsTopHeader;