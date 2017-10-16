import React  from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

//This is a stateless component: It means it just renders html and in this case it does not have properties
//activeClassName : it's a cool functionality already in react that says if the link is active apply the style active
const Header =({loading})=>{
 return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/portfolio" activeClassName="active">Portfolio</Link>
    </nav>
 );
};

Header.propTypes={
  loading: PropTypes.bool.isRequired
};

export default Header;
