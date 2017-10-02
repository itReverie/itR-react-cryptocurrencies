import React  from 'react';
import PropTypes from 'prop-types';

//This is a stateless component: It means it just renders html and in this case it does not have properties
//activeClassName : it's a cool functionality already in react that says if the link is active apply the style active
const Footer =({loading})=>{
  return (
    <footer>
      <p>&copy;2017 Brenda Jimenez &bull; <a href="tel:9123456789">9123456789</a></p>
    </footer>
  );
};

Footer.propTypes={
  loading: React.PropTypes.bool.isRequired
};

export default Footer;
