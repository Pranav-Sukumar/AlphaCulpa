import AddClass from './AddClass';
import './App.css';
import ClassSearch from './ClassSearch';
import Homepage from './Homepage';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import WriteReview from './WriteReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage/>} />
      </Routes>
      <Routes>
        <Route path = {"/classsearch"} element = {<ClassSearch/>} />
      </Routes>
      <Routes>
        <Route path = {"/classsearch/addclass"} element = {<AddClass/>} />
      </Routes>
      <Routes>
        <Route path = {"/review"} element = {<WriteReview/>} />
      </Routes>
    </Router>

    
  );
}

export default App;
