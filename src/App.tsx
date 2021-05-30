import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NowPlaying from './Pages/NowPlaying';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import { Details, Search } from '@material-ui/icons';
import Layout from './Components/Layout';
import { NaviationPaths } from './Constants/Constants';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Constants/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App;
