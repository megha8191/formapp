// Result.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const formdata = location?.state?.formdata;

  if (!formdata) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <p>Result: we are using useLocation and useNavigate hooks from react router dom, but we can do it without uselocation by defining formdata in app.js and pass formdata and setFormdata to Formcmpt and result like this :  </p>
        <pre>
             Route path='/form' element=Formcmpt setFormdata=setFormdata  formdata=formdata/
        </pre>
      <p>Name: {formdata.fname}</p>
      <p>Age: {formdata.age}</p>
      <p>Comment: {formdata.comment}</p>
      <button onClick={()=>{
              navigate(-1);
             }}>Go back</button>
      
    </div>
  );
}

export default Result;
