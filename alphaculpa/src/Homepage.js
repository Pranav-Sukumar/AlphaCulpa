import './App.css';
import './homepage.css'

import { Link } from 'react-router-dom';

function Homepage({kp}) {
  return (
    <div>
      <div class="top-bar">
            <Link to ="/">
                <img src={require(`./images/logo.png`)} alt="Logo" class="logo"/>
            </Link>
      <div class="karma">
        Karma Points: {kp}
      </div>
      </div>
        <div class="container-home">
          <h1>Welcome to Alpha Culpa!</h1>
          <p class="subtitle">Columbia’s anonymous professor and course rating site</p>

          <div class="button-container">
            <div class="button-section">
                <img src={require("./images/arrow.png")} alt="" class="arrow arrow-left"/>
                <div class="button-content">
                    <Link to = "/review" class="action-button">Write a Review</Link>
                    <p class="button-caption">Earn Karma points by submitting reviews</p>
                </div>
            </div>
            <div class="button-section">
                <div class="button-content">
                  <Link to = "/classsearch" class="action-button">View Classes</Link>
                    <p class="button-caption">Use Karma points to get class information</p>
                </div>
                <img src = {require("./images/arrow.png")} alt="" class="arrow arrow-right"/>
            </div>
          </div>
        </div>
     </div>
  
  );
}

export default Homepage;
