import './App.css';
import React, { useEffect, useState } from "react";
import DataLoader from './Data';

function groupDataByProjectEmployeeData() {
    const dati = DataLoader();
   
    function groupDataByProjectEmployeeDate(data) {
        return data.reduce((groupedData, item) => {
          const projectName = item.project.name;
          const employeeName = item.employee.name;
          const date = item.date;
          const key = `${projectName}/${employeeName}/${date}`;

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

    const groupedData = groupDataByProjectEmployeeDate(dati);
    const sortedGroup = Object.entries(groupedData).sort();
            
  return (
   <div>
    <table>
        <thead>
            <tr>
                <th>Project</th>
                <th>Employee</th>
                <th>Date</th>
                <th>Hours</th>
            </tr>
        </thead>
        <tbody>
            {sortedGroup.map(([key, groupData]) => {
              const [projectName, employeeName, date] = key.split('/');
              return (
                <tr key={key}>
                  <td>{projectName}</td>
                  <td>{employeeName}</td>
                  <td>{new Date(date).toLocaleDateString('en-us')}</td>
                  <td>{groupData.hours}</td>
                </tr>
              )
            })}
        </tbody>
    </table>

   </div>
  );
}

export default groupDataByProjectEmployeeData;
