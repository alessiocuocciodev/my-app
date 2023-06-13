import axios from 'axios';
import React, { useEffect, useState } from "react";

export default function DataLoader() {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/getListOfTimeEntries')
      .then(function(response) {
        setData(response.data);
      })
      .catch(function(error) {
        setError(error)
      });
    }, [])

    return data;
}

