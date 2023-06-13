import './App.css';
import React, { useEffect, useState } from "react";
import DataLoader from './Data';

function GroupByProject() {
    const dati = DataLoader();
   
    function groupDataByProject(data) {
        return data.reduce((groupedData, item) => {
          const projectName = item.project.name;
          if (!groupedData[projectName]) {
            groupedData[projectName] = {
                data: [],
                hours: 0,
            };
          }
          groupedData[projectName].data.push(item);
          groupedData[projectName].hours += item.hours
          return groupedData;
        }, {});
      }

    const groupedData = groupDataByProject(dati);
    const sortedGroup = Object.entries(groupedData).sort();
            
  return (
   <div>
    <table>
        <thead>
            <tr>
                <th>Project</th>
                <th>Hours</th>
            </tr>
        </thead>
        <tbody>
            {sortedGroup.map(([projectName, projectData]) => (
                <tr key={projectName}>
                    <td>{projectName}</td>
                    <td>{projectData.hours}</td>
                </tr>
            ))}
        </tbody>
    </table>

   </div>
  );
}

export default GroupByProject;
