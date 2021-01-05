import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import '../Styles/App.css';


function App() {

  const [data, setData] = useState([])

  const fetchApi = async() => {
    const res = await fetch('https://ventura-api-test.herokuapp.com/');
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      {
        data.map( trip => (<Card key={trip.id} trip={trip} />))
      }
    </div>
  );
}

export default App;

