import './App.css';
import './addclass.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddClass({ kp, addNewClass }) {
  const [className, setClassName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [professorName, setProfessorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewClass(professorName, courseId, className);
    setClassName('');
    setCourseId('');
    setProfessorName('');
    
  };

  return (
    <div className="container-add-class">
      <div className="top-bar">
        <Link to="/">
          <img src={require(`./images/logo.png`)} alt="Logo" className="logo" />
        </Link>
        <div className="karma">Karma Points: {kp}</div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="class-name">Please enter the class name</label>
            <input
              type="text"
              className="add-class-text-style"
              id="class-name"
              placeholder="Ex: User Interfaces"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course-id">Please enter the course ID</label>
            <input
              type="text"
              className="add-class-text-style"
              id="course-id"
              placeholder="Ex: COMS 4170"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="professor-name">Please enter the Professor Name</label>
            <input
              type="text"
              className="add-class-text-style"
              id="professor-name"
              placeholder="Ex: Brian Smith"
              value={professorName}
              onChange={(e) => setProfessorName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-form-btn">Submit New Class</button>
        </form>
      </div>
    </div>
  );
}

export default AddClass;
