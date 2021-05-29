import { useEffect, useState } from 'react';
import './App.css';
import { getTrendingMovies, Movie, POSTER_BASE_URL } from './Services/tmdbAPI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NowPlaying from './Pages/NowPlaying';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import { Details, Search } from '@material-ui/icons';
import Layout from './Components/Layout';
import { NaviationPaths } from './Constants/Constants';

// function ListItem(props: {key: string, value: string, poster: string}) {
//   return (
//     <div>
//       <img style={{padding: '10px'}} height="auto" width="175px" src={POSTER_BASE_URL + props.poster} alt={props.value} />
//     </div>
//   );
// }

function App() {

  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      setTrendingMovies(await getTrendingMovies());
    };

    fetchUpcoming();
  }, []);

  return (
    <BrowserRouter>

      <Layout>
        <Switch>

          <Route path={NaviationPaths.NOW_PLAYING} exact>
            <NowPlaying></NowPlaying>
          </Route>

          <Route path={NaviationPaths.POPULAR}>
            <Popular></Popular>
          </Route>

          <Route path={NaviationPaths.TOP_RATED}>
            <TopRated></TopRated>
          </Route>

          <Route path={NaviationPaths.DETAILS}>
            <Details></Details>
          </Route>

          <Route path={NaviationPaths.SEARCH}>
            <Search></Search>
          </Route>

        </Switch>
      </Layout>
    </BrowserRouter>
  )
      {/* <TopNavbar />
      
      <GridList style={{flexWrap: 'nowrap', paddingLeft: '5px', paddingRight: '5px', marginTop: '20px'}} cols={2.5}>
        {trendingMovies.map((movie) =>
          <ListItem key={movie.title.toString()} value={movie.title} poster={movie.poster_path ? movie.poster_path : ''} />
        )}
      </GridList>

      <BottomNavbar /> */}

}

export default App;
