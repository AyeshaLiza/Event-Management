import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { useState } from 'react';
import login from '../../assets/login.jpg'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {
  const {signUp, googleSignIn} = useContext(AuthContext)

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') || []
  const [registerError, setRegisterError] = useState('') || []

const handleFormSubmit = e =>{


  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
setRegisterError('')



  if (password.length < 6) {
    setRegisterError(' provide atleast 6 digit password')
    return
  }
  else{
    signUp(name, email, password).then((result) => 
        swal("Good job!", "regestration successfully done!", "success")
      )
      .catch((error) =>{
        setRegisterError(error.message)})
  }
}

const handleGoogle = () =>{
  googleSignIn().then((result) =>{
    console.log(result.user);
  })
}

 return (
  <div>

<div className="hero min-h-screen bg-violet-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
      <img className='h-[420px] rounded-lg' src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleFormSubmit} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder=" name" name='name' className="input input-bordered input-primary w-full max-w-xs" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered input-primary w-full max-w-xs " required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password"  className="input input-bordered input-primary w-full max-w-xs" required />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="" name='' placeholder=""  className="input input-bordered input-primary w-full max-w-xs" />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div>
          img
        </div>
        

         {
        registerError &&   <div className="toast toast-top toast-center">
        <div className="alert alert-info">
          <span>{registerError}</span>
        </div>
       
      </div>
      }
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Register</button>
        </div>

        <div className="form-control mt-2">
          <button type='button' onClick={handleGoogle} className="btn btn-primary">Login with Google</button>
        </div>
                <p> Already ave ana account?<Link to ='/login'><button className="btn btn-active btn-link">Login Here</button></Link></p>
      </form>
      <div>
       <img src="" alt="" />
      </div>
     
    </div>
  </div>
</div>

  </div>
 );
};

export default Register;