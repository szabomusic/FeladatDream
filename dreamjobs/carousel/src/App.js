import React,{useState} from 'react';
import './App.scss';
import Jobs from './components/Jobs';
import {
  isMobile
} from "react-device-detect";
var data = require('./data.json');

function App() {

  const [count, setCount] = useState(0);
  

  // return (
    if (isMobile) {
      return (
         <div className="mobilMainContainer">
      <h1>Recommended Jobs</h1>
      <div className='mobilCardContainer'>
      {data.slice(0,10).slice(count, count+1).map((item, i)=> <Jobs
                        item={item}
                        key={i}
      />)}
     </div>
    <div className='btnContainer'> 
      <button disabled={count === 0} onClick={()=>{ if(count > 0) setCount(count-1)}}>Hatra</button>
      <button disabled={count === 9} onClick={()=>{ if(count < 10) setCount(count+1)}}>Elore</button>
    </div>
  </div>
  
      );
  }
  return (

    <div className="mainContainer">
        <h1>Recommended Jobs</h1>
        <div className='cardContainer'>
        {data.slice(count, count+5).map((item, i)=> <Jobs
                          item={item}
                          key={i}
        />)}
       </div>
      <div className='btnContainer'> 
        <button  disabled={count === 0} onClick={()=>{ if(count > 0) setCount(count-1)}}>Hatra</button>
        <button disabled={count === data.length-5} onClick={()=>{ if(count < data.length-5) setCount(count+1)}}>Elore</button>
      </div>
    </div>
    
        );
      }

export default App;

