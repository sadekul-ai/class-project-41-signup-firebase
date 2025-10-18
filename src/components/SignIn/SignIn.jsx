import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const SignIn = () => {

  const [loggedIn, setLoggedIn] = useState({
  
    });


     const handleSignin =()=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      

         signInWithEmailAndPassword(auth, email, password)
        
            .then((result)=>{
              console.log(result);
              const user = result.user;
             setLoggedIn(user); 
            })
        
            .catch(error => {
              const errorMessage = error.message;
              console.log(errorMessage);
              
            })

        form.reset()
    }
  return (
    <div className="flex justify-center items-center mt-50">

        <p className="text-red-500">
        {
        loggedIn.email
      }
      </p>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
    
              <form onSubmit={handleSignin} className="fieldset">
     
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
    
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
    
                <div className="flex justify-between">
                  <Link to="" className="link link-hover"> Forget Password? </Link>
                  <Link to="/signup" className="link link-hover"> Create account</Link>
                </div>
    
                <input  value='Signin' type="submit" className="btn btn-neutral mt-4"/>
                
              </form>
            </div>
          </div>
        </div>
  );
};

export default SignIn;
