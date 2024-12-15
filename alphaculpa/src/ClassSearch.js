import './App.css';
import './classsearch.css'
import { Link } from 'react-router-dom';
import ClassSearchTile from './ClassSearchTile';


function ClassSearch({kp, data}) {
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

        {data.map((dataItem, index) => (
          dataItem.professors.map((professor, profIndex) => (
            <ClassSearchTile
              class_name={dataItem.className}
              class_id={dataItem.classId}
              prof_name={professor.name}
            />
          ))
        ))}

        
          {/* <ClassSearchTile class_name = "CV 2 Section 1" class_id = "COMS 4731" prof_name = "Carl Vondrick"/>
          <ClassSearchTile class_name = "CV 1 Section 1" class_id = "COMS todo" prof_name = "Shree Nayar"/>
          <ClassSearchTile class_name = "Class x" class_id = "COMS todo" prof_name = "Pranav"/>
          <ClassSearchTile class_name = "Class y" class_id = "COMS todo" prof_name = "Pranav"/>
          <ClassSearchTile class_name = "Class z" class_id = "COMS todo" prof_name = "Pranav"/>
          <ClassSearchTile class_name = "class todo" class_id = "COMS todo" prof_name = "Pranav"/> */}

        
        </div>
    </div>
  
  );
}

export default ClassSearch;
