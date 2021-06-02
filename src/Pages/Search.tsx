import { makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieList from "../Components/MovieList";
import { NaviationPaths } from "../Helpers/Constants";
import { getSearchResults } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";

const useStyle = makeStyles((theme) => ({
    pageTitle: {
        marginBottom: theme.spacing(2),
        color: theme.palette.common.white
    }
}));

const Search = () => {
    const pageName = 'Search';
    const [searchResults, setSearchResults] = useState<MovieSearchResult[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('Iron man');
    const style = useStyle();
    const history = useHistory();

    useEffect(() => {
        const fetchSearch = async () => {
          setSearchResults(await getSearchResults(searchTerm));
        };
    
        fetchSearch();
    }, [searchTerm]);

    const handleMovieSelect = (movie: MovieSearchResult) => {
        history.push(`${NaviationPaths.DETAILS}/${movie.id}`)
    }

    return (
        <>
            <Typography className={style.pageTitle} variant="h5"> { pageName } </Typography>
            <MovieList movies={searchResults} handleSelect={handleMovieSelect}></MovieList>
        </>
    )
}

export default Search;