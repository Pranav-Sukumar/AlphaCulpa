import './App.css';
import './addclass.css'
import { Link } from 'react-router-dom';

function AddClass({kp}) {
  return (
    <div class="container-add-class">
        <div class="top-bar">
            <Link to ="/">
                <img src={require(`./images/logo.png`)} alt="Logo" class="logo"/>
            </Link>
            <div class="karma">
                Karma Points: {kp}
            </div>
        </div>
        <div class="form-container">
            <form>
                <div class="form-group">
                    <label for="class-name">Please enter the class name</label>
                    <input type="text" class="add-class-text-style" id="class-name" placeholder="Ex: User Interfaces" required/>
                </div>
                <div class="form-group">
                    <label for="course-id">Please enter the course ID</label>
                    <input type="text" class="add-class-text-style" id="course-id" placeholder="Ex: COMS 4170" required/>
                </div>
                <div class="form-group">
                    <label for="professor-name">Please enter the Professor Name</label>
                    <input type="text" class="add-class-text-style" id="professor-name" placeholder="Ex: Brian Smith" required/>
                </div>
                <button type="submit" class="submit-form-btn">Submit New Class</button>
            </form>
        </div>
    </div>
  
  );
}

export default AddClass;