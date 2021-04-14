import './App.css';

import ListPage from './pages/ListPage'
import PostPage from './pages/PostPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Container from "@material-ui/core/Container";


const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: '#078891',
      },
    },
  },
})

function App() {
  return (
    <div className="App">
       <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>

            <Typography variant="h6" >
              MyPosts.com
            </Typography>

          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ListPage/>
          </Route>
          <Route path="/posts/:id">
            <PostPage />
          </Route>
        </Switch>
        </BrowserRouter>

        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
