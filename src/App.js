import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [advice, setAdvice] = useState(
    {  
      id:'4',
      advise:'he', 
    });
  console.log(advice);

  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    //fetchAdvice();
  },[]);

  const fetchAdvice = async () => {
    try{

      const response = await axios.get(url);
      const updatedResponse = response.data.slip;
      await axios.get('https://api.adviceslip.com/advice')
      console.log(updatedResponse);
      setAdvice([advice.id == updatedResponse.id, advice.advise == updatedResponse.advice]);
    }
      catch(error) {
        console.log(error + " error");
      };
  }


  const test = () => {
    setAdvice ([advice.id = 100, advice.advise = 'heyyyy']);
  }
  
//<h1 className="heading">{advice}</h1>
  return (
    <div className="app">
        <div className="card">
        <h1 className="heading">{advice.advise}</h1>
          <button className="button" onClick={test}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
