import React from 'react';
 import './App.css';
 import Student from './student.js';
 import Course from './course_detail.js';

function App() {
  return (
    <div className="App">
      <Student />
      <Course sr="Sr." name="Name" roll_no="Roll N0" course="Courses"/>
      <Course sr="1" name="Nabeel" roll_no="1122" course="Artifitial Intelligence"/>
      <Course sr="2" name="Umer" roll_no="1123" course="Cloud Computing"/>
    </div>
  );
}
 
export default App;
