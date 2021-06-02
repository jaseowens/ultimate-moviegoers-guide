import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Services/tmdbAPI";
import { MovieDetails } from "../Services/tmdbDTO";
import { makeStyles } from "@material-ui/core";
import DetailsTopHeader from "../Components/Details/DetailsTopHeader";
import DetailsSection from "../Components/Details/DetailsSection";
import DetailsWhereToWatch from "../Components/Details/DetailsWhereToWatch";

interface DetailRouteParams {
    id: string
}

const useStyle = makeStyles((theme) => ({
    overView: {
        color: theme.palette.text.primary
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
        <>
            <DetailsTopHeader movie={movieDetails}></DetailsTopHeader>

            <DetailsSection sectionHeader="Overview">
                <div className={style.overView}>
                    { movieDetails?.overview }
                </div>
            </DetailsSection>

            <DetailsSection sectionHeader="Where to watch" divider={true}>
                <DetailsWhereToWatch id={movieDetails?.id}></DetailsWhereToWatch>
            </DetailsSection>
        </>
    )
}

export default Details;