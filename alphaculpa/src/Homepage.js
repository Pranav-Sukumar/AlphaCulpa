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
        <main>
          <h1>Welcome to Alpha Culpa!</h1>
          <p class="subtitle">Columbia’s anonymous professor and course rating site</p>
          <div class="button-group">
            <Link to = "/classsearch" class="action-button">View Classes</Link>
            <Link to = "/review" class="action-button">Write a Review</Link>
          </div>
        </main>
     </div>
  
  );
}

export default Homepage;
