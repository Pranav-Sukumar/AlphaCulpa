import './App.css';
import './classsearch.css'
import { Link } from 'react-router-dom';


function ClassSearch({class_name, class_id, prof_name}) {
  const path = "/viewclass/" + class_id + "/" + class_name  + "/" + prof_name
  return (

    <div class="card">
        <div class="card-header">{class_name}</div>
        <div class="card-body">
            <p>{class_id}</p>
            <p>Professor {prof_name}</p>
            <br/>
            <Link to={path} class="view-btn">View Information</Link>
        </div>
    </div>

  
  );
}

export default ClassSearch;
