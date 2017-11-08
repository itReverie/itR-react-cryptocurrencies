import React from 'react';
import { Route, Link, NavLink  } from 'react-router-dom';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import theme from './basicTheme';


//Import Views
import HomePage from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';

const Routes = () => (
  <MuiThemeProvider theme={theme}>
  <div className="primary-layout">
    <header>
      <nav>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        {" | "}
        <Link to="/portfolio" activeclassname="active">Portfolio</Link>
      </nav>
    </header>
    <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
    </main>
  </div>
  </MuiThemeProvider>
);


export default Routes;
