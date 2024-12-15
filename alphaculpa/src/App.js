import AddClass from './AddClass';
import './App.css';
import ClassSearch from './ClassSearch';
import Homepage from './Homepage';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import WriteReview from './WriteReview';
import ViewInformationClass from './ViewInformationClass.js'

function App() {
  const initialData = require('./data_json.json');

  const [data, setData] = useState(initialData);

  function addNewClass(prof_name, class_id, class_name) {

    let newData = [...data];

    let newItem = {
      "classId": class_id,
      "className": class_name,
      "professors": [
        {
          "name": prof_name,
          "syllabus": {
            "content": "",
            "unlocked": true
          },
          "lectureStyle": {
            "content": {
              "style": "",
              "recording": "",
              "prerequisites": []
            },
            "unlocked": false
          },
          "gradeData": {
            "content": "",
            "unlocked": false
          },
          "reviews": {
            "content": [],
            "unlocked": false
          }
        }
      ]
    }

    console.log(newItem)

    newData = [...newData, newItem]

    setData(newData);

    
    
  }

  const [karmaPoints, setKarmaPoints] = useState(50);
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage kp = {karmaPoints}/>} />
        <Route path = {"/classsearch"} element = {<ClassSearch kp = {karmaPoints} data = {data}/>} />
        <Route path = {"/classsearch/addclass"} element = {<AddClass kp = {karmaPoints} addNewClass = {addNewClass}/>} />
        <Route path = {"/review"} element = {<WriteReview kp = {karmaPoints} setKP = {setKarmaPoints}/>} />
        <Route path = {"/viewclass/:prof_name"} element = {<ViewInformationClass kp = {karmaPoints} setKP = {setKarmaPoints}/>} />
      </Routes>

      
    </Router>

    
  );
}

export default App;
