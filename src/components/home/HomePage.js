import React from 'react';
import {Link} from 'react-router-dom';


//TODO: Maybe add one example to make use of Link in react-router-dom
class HomePage extends React.Component{
  render()
  {
    return (
      <div className="jumbotron">
        <h1>Cryptocurrency Portfolio</h1>
        <h4>Assumptions</h4>
        <ul>
          <li>You can buy maximum 1000</li>
        </ul>
      </div>
    );
  }
}


export default HomePage;
