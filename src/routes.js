import React from 'react';
import { Route, Link, NavLink  } from 'react-router-dom';

//Import Views
import HomePage from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';

const Routes = () => (
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
);


export default Routes;
