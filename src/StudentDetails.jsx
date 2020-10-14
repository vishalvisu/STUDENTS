import React from "react";

export default function StudentDetails(props) {
  //console.log(props);
  return (
    <div className="student">
      <h1>Details</h1>
      <h1>CLASS - {props.obj.class}</h1>
      <h2>STREAM - {props.obj.stream}</h2>
      <h3>GENDER- {props.obj.Gender}</h3>
      <h4>DOB: {props.obj.Birth_Day}</h4>
    </div>
  );
}
