import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import NavBar from './components/NavBar';
import QuemSouEu from './components/QuemSouEu';
import './App.css';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00729c',
    },
  },
  typography: {
    fontDisplay: 'justify',
    button: {
      fontFamily: 'Arial',
      color: 'white',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <title> GDDev - Gustavo Diogo Dev</title>
      </Helmet>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route path='/quem-sou-eu' exact component={QuemSouEu} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
