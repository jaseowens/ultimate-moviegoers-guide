import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Services/tmdbAPI";
import { MovieDetails } from "../Services/tmdbDTO";
import { makeStyles } from "@material-ui/core";
import { useScreenWidth } from "../Helpers/ScreenSize";
import DetailsTopHeader from "../Components/Details/DetailsTopHeader";

interface DetailRouteParams {
    id: string
}

const useStyle = makeStyles((theme) => ({
}));

const Details = () => {
    const { id } = useParams<DetailRouteParams>();
    const [movieDetails, setMovieDetails] = useState<MovieDetails>();
    const style = useStyle();
    const breakpoint = useScreenWidth();


    useEffect(() => {
        const fetchDetails = async () => {
          setMovieDetails(await getMovieDetails(id));
        };
    
        fetchDetails();
    }, [id]);

    return (
        <>
        <DetailsTopHeader movie={movieDetails}></DetailsTopHeader>
        { movieDetails?.overview }
        </>
    )
}

export default Details;