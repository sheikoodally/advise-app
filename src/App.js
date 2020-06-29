import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [advice, setAdvice] = useState(
      '' 
    );
  console.log(advice);

  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    fetchAdvice();
  },[]);

  const fetchAdvice = async () => {
    try{

      const response = await axios.get(url);
      const updatedResponse = response.data.slip.advice;
      if(updatedResponse == advice)
      {
        fetchAdvice();
      }else{
        setAdvice(updatedResponse);
      }
      
    }
      catch(error) {
        console.log(error + " error");
      };
  }


  return (
    <div className="app">
        <div className="card">
        <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
