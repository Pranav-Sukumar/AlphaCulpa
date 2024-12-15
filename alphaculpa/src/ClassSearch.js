import './App.css';
import './classsearch.css'
function ClassSearch() {
  return (
    <div class="container">
        <div class="top-bar">
            <img src={require(`./images/logo.png`)} alt="Logo" class="logo"/>
            <div class="karma">
                Karma Points: 20
            </div>
        </div>
        <div class="header">
            <input type="text" placeholder="Class Name" class="search-bar"/>
            <span>
                <span>
                    Don't see the class you are looking for?
                </span>
                
                <button class="add-class-btn" onclick = "openAddClassPage()">Add a New Class!</button>
            </span>
            
        </div>
        <div class="grid">
            <div class="card">
                <div class="card-header">CV 2 Section 1</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>

            <div class="card">
                <div class="card-header">Class 2</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 3</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 4</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>

            <div class="card">
                <div class="card-header">Class 5</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 6</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header">Class 7</div>
                <div class="card-body">
                    <p>COMS 4731</p>
                    <p>Professor Carl Vondrik</p>
                    <button class="view-btn" onclick = "openPage()">View Information</button>
                </div>
            </div>
        </div>
    </div>
  
  );
}

export default ClassSearch;
