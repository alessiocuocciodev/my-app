import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import DataLoader from './Data';

function NoGroup() {
const dati = DataLoader();
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
          {dati.map(item => (
            <tr key={item.id}>
              <td>{item.project.name}</td>
              <td>{item.employee.name}</td>
              <td>{new Date(item.date).toLocaleDateString('en-us')}</td>
              <td>{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NoGroup;
