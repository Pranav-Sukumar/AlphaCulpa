import AddClass from './AddClass';
import './App.css';
import ClassSearch from './ClassSearch';
import Homepage from './Homepage';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import WriteReview from './WriteReview';

function App() {

  const [karmaPoints, setKarmaPoints] = useState(50);
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage kp = {karmaPoints}/>} />
      </Routes>
      <Routes>
        <Route path = {"/classsearch"} element = {<ClassSearch kp = {karmaPoints}/>} />
      </Routes>
      <Routes>
        <Route path = {"/classsearch/addclass"} element = {<AddClass kp = {karmaPoints}/>} />
      </Routes>
      <Routes>
        <Route path = {"/review"} element = {<WriteReview kp = {karmaPoints} setKP = {setKarmaPoints}/>} />
      </Routes>
    </Router>

    
  );
}

export default App;
