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
            "content": {
              "Topic": "",
              "Grading": "",
              "Exam Dates": "",
              "Lecture Schedule": ""
            },
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

    newData = [...newData, newItem]

    setData(newData);

    
    
  }

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

  function getAvailableClasses() {
    return data.map(item => ({
      id: item.classId,
      name: item.className
    }));
  }

  function unlockLectureStyle(class_id, class_name, prof_name) {
    const updatedData = data.map(cls => {
      if (cls.classId === class_id && cls.className === class_name) {
        const updatedProfessors = cls.professors.map(prof => {
          if (prof.name === prof_name) {
            return {
              ...prof,
              lectureStyle: {
                ...prof.lectureStyle,
                unlocked: true
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
    console.log("Grade data unlocked:", JSON.stringify(updatedData, null, 2));
  }

  function unlockGrade(class_id, class_name, prof_name) {
    const updatedData = data.map(cls => {
      if (cls.classId === class_id && cls.className === class_name) {
        const updatedProfessors = cls.professors.map(prof => {
          if (prof.name === prof_name) {
            return {
              ...prof,
              gradeData: {
                ...prof.gradeData,
                unlocked: true
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
    console.log("Grade data unlocked:", JSON.stringify(updatedData, null, 2));
  }
  
  function unlockReviews(class_id, class_name, prof_name) {
    const updatedData = data.map(cls => {
      if (cls.classId === class_id && cls.className === class_name) {
        const updatedProfessors = cls.professors.map(prof => {
          if (prof.name === prof_name) {
            return {
              ...prof,
              reviews: {
                ...prof.reviews,
                unlocked: true
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
    console.log("Grade data unlocked:", JSON.stringify(updatedData, null, 2));
  }

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage kp = {karmaPoints}/>} />
        <Route path = {"/classsearch"} element = {<ClassSearch kp = {karmaPoints} data = {data}/>} />
        <Route path = {"/classsearch/addclass"} element = {<AddClass kp = {karmaPoints} addNewClass = {addNewClass}/>} />
        <Route path = {"/review"} element = {<WriteReview kp = {karmaPoints} setKP = {setKarmaPoints} addReview={addReview} getAvailableClasses={getAvailableClasses}/>} />
        <Route path = {"/viewclass/:class_id/:class_name/:prof_name"} element = {<ViewInformationClass kp = {karmaPoints} setKP = {setKarmaPoints} data = {data} unlockLectureStyle = {unlockLectureStyle} unlockGrade = {unlockGrade} unlockReviews = {unlockReviews}/>} />
      </Routes>

      
    </Router>

    
  );
}

export default App;
