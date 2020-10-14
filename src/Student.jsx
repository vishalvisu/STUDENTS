import React from 'react';
import { Link } from 'react-router-dom';
export default function Student(props)
{
    function ShowDetails()
    {
        props.showDetails(props.id);
    }
      
    return (
    <div className="student">
          <h1>{props.name}</h1>
         <h2>ID: {props.id}</h2>
        <Link to='/StudentDetails' onClick={ShowDetails}>
        showDetails
        </Link>
    </div>)
}

