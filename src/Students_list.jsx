import React, { useState } from 'react';
import data from './data.js';
import Student from './Student.jsx';
import  './index.css';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';

export default function Students_list(props)
{
const[student,setstudent]= useState(data);


const showdetails= function(id)
{
 //   console.log("show details working");
    props.fun(id);
      
};
  
   function fun(obj)
   {
   //    console.log(obj);
       return (
    <Student name={obj.name}
    id={obj.id}
    key={obj.id}
    showDetails={showdetails}
    />
    );
   }

    return(

        <>
      <div className="list">
          {student.map(fun)}
      </div>
  </>

    )



}