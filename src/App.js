import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import GroupByProject from './GroupByProject';
import GroupByProjectEmployee from './GroupByProjectEmployee';
import GroupByProjectEmployeeDate from './GroupByProjectEmployeeDate';
import NoGroup from './NoGroup';

function App() {
  const [selectedButton, setSelectedButton] = useState('home');
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  }
  
  return (
    <div>
      <button onClick={() => handleButtonClick('project')}>Project</button>
      <button onClick={() => handleButtonClick('employee')}>Employee</button>
      <button onClick={() => handleButtonClick('date')}>Date</button>
      <button onClick={() => handleButtonClick('home')}>No group</button>

      {selectedButton === 'home' && <NoGroup/>}
      {selectedButton === 'project' && <GroupByProject/>}
      {selectedButton === 'employee' && <GroupByProjectEmployee/>}
      {selectedButton === 'date' && <GroupByProjectEmployeeDate/>}


    </div>
  );
}

export default App;
