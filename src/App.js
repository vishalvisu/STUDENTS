import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Students_list from './Students_list';
import data from './data.js';
import StudentDetails from './StudentDetails.jsx';

function App() 
{
  const [Details,setDetails]= useState(data[0].details);

    const parent= function(id)
    {
     console.log(Details);
        for(let i=0;i<data.length;i++)
        {
          if(data[i].id==id)
           {
             setDetails(data[i].details);
               console.log(Details);
           }    
        }
    };

  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' render={() => <Students_list fun={parent}/>} exact/>
     <Route path='/StudentDetails' component={() => <StudentDetails obj={Details}/>}/>
     </Switch>    
     </BrowserRouter>
       );
}

export default App;
