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

  const [karmaPoints, setKarmaPoints] = useState(50);

  const addReview = (classId, professorName, newReview) => {
    const updatedData = data.map(cls => {
      if (cls.classId === classId) {
        const updatedProfessors = cls.professors.map(prof => {
          if (prof.name === professorName) {
            return {
              ...prof,
              reviews: {
                ...prof.reviews,
                content: [...prof.reviews.content, newReview]
              }
            };
          }
          return prof;
        });
        return { ...cls, professors: updatedProfessors };
      }
      return cls;
    });

    setData(updatedData);

    console.log("Updated JSON:", JSON.stringify(updatedData, null, 2));
  };

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage kp = {karmaPoints}/>} />
        <Route path = {"/classsearch"} element = {<ClassSearch kp = {karmaPoints} data = {data}/>} />
        <Route path = {"/classsearch/addclass"} element = {<AddClass kp = {karmaPoints}/>} />
        <Route path = {"/review"} element = {<WriteReview kp = {karmaPoints} setKP = {setKarmaPoints} addReview={addReview}/>} />
        <Route path = {"/viewclass/:prof_name"} element = {<ViewInformationClass kp = {karmaPoints} setKP = {setKarmaPoints}/>} />
      </Routes>

      
    </Router>

    
  );
}

export default App;
