import { makeStyles } from "@material-ui/core";
import { useScreenWidth } from "../Helpers/ScreenSize";
import { Genre } from "../Services/tmdbDTO";

const useStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "nowrap",
    },
    bubble: {
        padding: theme.spacing(1),
        margin: theme.spacing(0,1,0,1),
        borderRadius: '10px',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.common.white,
    }
}));

const GenreBubbles = (props: {genres: Genre[]}) => {
    const style = useStyle();
    const breakpoint = useScreenWidth();

    return (
        <div className={style.wrapper} style={(breakpoint === 'lg' || breakpoint === 'xl') ? {justifyContent: 'flex-start'} : {justifyContent: 'center'}}>
        {
            props.genres.map((genre) => (
                <div key={genre.id} className={style.bubble}>{genre.name}</div>
            ))
        }
        </div>
    )
}

export default GenreBubbles;