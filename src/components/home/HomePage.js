import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render()
  {
    return (
      <div className="jumbotron">
        <h1>Cryptocurrency Portfolio</h1>
        <h4>Assumptions</h4>
        <ul>
          <p>You can buy maximum 1000</p>
        </ul>
      </div>
    );
  }
}


export default HomePage;
