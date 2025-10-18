import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const SignUP = () => {

  const [registered, setRegistered] = useState({

  });
  
  

  const handleSignup = () => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    

    createUserWithEmailAndPassword(auth, email, password)

    .then((result)=>{
      console.log(result);
      const user = result.user;
     setRegistered(user); 
    })

    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
      
    })
    

    form.reset();
  };
  return (
    <div className="flex justify-center items-center mt-50">
      <p className="text-red-500">
        {
        registered.email
      }
      </p>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignup} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <div>
              <Link to="/signin" className="link link-hover">
                {" "}
                Already have an account! Please Login
              </Link>
            </div>

            <input
              value="Signup"
              type="submit"
              className="btn btn-neutral mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
