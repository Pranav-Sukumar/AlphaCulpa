import './App.css';
import './classsearch.css'
import { Link } from 'react-router-dom';


function ClassSearch({kp}) {
  return (
    <div class="container">
        <div class="top-bar">
            <Link to ="/">
                <img src={require(`./images/logo.png`)} alt="Logo" class="logo"/>
            </Link>
            <div class="karma">
                Karma Points: {kp}
            </div>
        </div>
        <div class="header-class-search">
            <input type="text" placeholder="Class Name" class="search-bar"/>
            <span>
                <span>
                    Don't see the class you are looking for?
                </span>
                
                <Link to ="/classsearch/addclass" class="add-class-btn">Add a New Class!</Link>
            </span>
            
        </div>
        <div class="grid">
            <div class="card">
                <div class="card-header">CV 2 Section 1</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>

            <div class="card">
                <div class="card-header">Class 2</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 3</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 4</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>

            <div class="card">
                <div class="card-header">Class 5</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 6</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 7</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <Link to="/viewclass" class="view-btn">View Information</Link>
                </div>
            </div>
        </div>
    </div>
  
  );
}

export default ClassSearch;
