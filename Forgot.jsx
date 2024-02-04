import React from "react";
import './Forgot.css'

const Forgot = () => 
    {
      return (

      <div className='container'>
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <div>
         <select className="input">
                <option selected="true" disabled="disabled" class="select">Please Selects</option>
                <option class="select">Which is your Favorite Movie?</option>
                <option class="select">Which is your pet's name?</option>
                <option class="select">Which is the name of your village?</option>
          </select>
      </div>

        <div className="input">
            <input type="text" placeholder="Answer"/>
        </div>

      </div>
        <a className="forgot-password" href="https://github.com/"> Already have an account? <a className="login" href="Forgot.jsx" >Login</a></a>
      <div className="submit-container">
        <button className="submit" >Forgot</button> 
  
      </div>
      
    </div>
    );
  }
  
  
  export default Forgot;