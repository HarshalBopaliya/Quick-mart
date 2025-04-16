import React,{useState} from 'react'
import {  useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
  let navigate =useNavigate();
  const hadleSummit = async (e)=>{
    e.preventDefault();
   const response= await fetch("http://localhost:5000/api/auth/createuser",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,cpassword:credentials.cpassword}),

    });
    const json = await response.json();
    console.log(json); 
   

    if(json.success){
        //save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        props.showAlert(" Account Created Successfully","success");
        navigate("/");
         
    }
    else{
      props.showAlert(" Invalid Details","danger");
    }

}
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className='mt-3'>
      <h2>Signup to continue to iNotebook</h2>
          <form onSubmit={hadleSummit}>
          <div className="my-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"  id="name" name="name"  onChange={onChange} aria-describedby="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  id="email" name="email"  onChange={onChange} aria-describedby="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"id="password" name="password" onChange={onChange} minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">confirm Password</label>
    <input type="password" className="form-control"id="cpassword" name="cpassword" onChange={onChange}
    minLength={5}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Signup
