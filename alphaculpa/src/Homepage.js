import './App.css';
import './homepage.css'
function Homepage() {
  return (
    <div>
      <div class="top-bar">
        <img src={require(`./images/logo.png`)} alt="Logo" class="logo" />
      <div class="karma">
        Karma Points: 20
      </div>
      </div>
        <main>
          <h1>Welcome to Alpha Culpa!</h1>
          <p class="subtitle">Columbia’s anonymous professor and course rating site</p>
          <div class="button-group">
            <a href="../ClassSearch/index.html" class="action-button">View Classes</a>
            <a href="../ReviewPage/review.html" class="action-button">Write a Review</a>
          </div>
        </main>
     </div>
  
  );
}

export default Homepage;
