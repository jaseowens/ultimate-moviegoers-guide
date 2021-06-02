import { makeStyles, Typography, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieList from "../Components/MovieList";
import { NaviationPaths } from "../Helpers/Constants";
import { getSearchResults } from "../Services/tmdbAPI";
import { MovieSearchResult } from "../Services/tmdbDTO";

const useStyle = makeStyles((theme) => ({
    wrapper: {
        minHeight: '85vh'
    },
    searchWrapper: {
        margin: theme.spacing(2, 0, 2, 0),
    },
    search: {
        width: '100%'
    },
    enterMessage: {
        color: theme.palette.common.white,
        textAlign: 'center',
        margin: theme.spacing(3)
    }
}));

const Search = () => {
    const [searchResults, setSearchResults] = useState<MovieSearchResult[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const style = useStyle();
    const history = useHistory();

    useEffect(() => {
        const fetchSearch = async () => {
            if(searchTerm && searchTerm != '') {
                setSearchResults(await getSearchResults(searchTerm));
            }
        };
    
        fetchSearch();
    }, [searchTerm]);

    const handleMovieSelect = (movie: MovieSearchResult) => {
        history.push(`${NaviationPaths.DETAILS}/${movie.id}`)
    }

    const handleSearch = (e: any) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    return (
        <div className={style.wrapper}>
            <form className={style.searchWrapper} noValidate autoComplete="off" onChange={handleSearch}>
                <TextField className={style.search} color="primary" id="search-input" label="Search" variant="outlined" />
            </form>
            { (searchResults && searchResults.length > 0) 
                ?
                    <MovieList movies={searchResults} handleSelect={handleMovieSelect}></MovieList>
                :
                <div className={style.enterMessage}>
                    <Typography variant='h5'> Enter a search term above to get started! </Typography>
                </div>

            }
        </div>
    )
}

export default Search;