import './App.css';
import React, { useEffect, useState } from "react";
import DataLoader from './Data';

function GroupByProject() {
    const dati = DataLoader();
   
    function groupDataByProjectEmployee(data) {
        return data.reduce((groupedData, item) => {
          const projectName = item.project.name;
          const employeeName = item.employee.name;
          const key = `${projectName}/${employeeName}`;

          if (!groupedData[key]) {
            groupedData[key] = {
                data: [],
                hours: 0,
            };
          }
          groupedData[key].data.push(item);
          groupedData[key].hours += item.hours
          return groupedData;
        }, {});
      }

    const groupedData = groupDataByProjectEmployee(dati);
    const sortedGroup = Object.entries(groupedData).sort();
            
  return (
   <div>
    <table>
        <thead>
            <tr>
                <th>Project</th>
                <th>Employee</th>
                <th>Hours</th>
            </tr>
        </thead>
        <tbody>
            {sortedGroup.map(([key, groupData]) => {
              const [projectName, employeeName] = key.split('/');
              return (
                <tr key={key}>
                  <td>{projectName}</td>
                  <td>{employeeName}</td>
                  <td>{groupData.hours}</td>
                </tr>
              )
            })}
        </tbody>
    </table>

   </div>
  );
}

export default GroupByProject;
