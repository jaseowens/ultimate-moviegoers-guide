import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Services/tmdbAPI";
import { MovieDetails } from "../Services/tmdbDTO";
import { Container, makeStyles, Typography } from "@material-ui/core";

interface DetailRouteParams {
    id: string
}

const useStyle = makeStyles((theme) => ({
    pageTitle: {
        marginBottom: theme.spacing(2),
        color: theme.palette.common.white
    }
}));

const Details = () => {
    const { id } = useParams<DetailRouteParams>();
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();
    const style = useStyle();

    useEffect(() => {
        const fetchDetails = async () => {
          setMovieDetails(await getMovieDetails(id));
        };
    
        fetchDetails();
    }, [id]);

    return (
        <Container>
            <Typography className={style.pageTitle} variant="h5"> {movieDetails?.original_title} </Typography>
            { movieDetails?.overview }
        </Container>
    )
}

export default Details;