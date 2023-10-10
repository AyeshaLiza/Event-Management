import React from 'react';
import { useContext ,useState } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import login from '../../assets/login.jpg'
import swal from 'sweetalert';
import { Link , useLocation, useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') || []
  const [loginError, setLoginError] = useState('') || []

  const location = useLocation();
  console.log(location);
    const from = location.state?.from?.pathname || "/";

  const {googleSignIn, signIn}= useContext(AuthContext) || []
  
      
      const handleFormSubmit = e =>{
  e.preventDefault();
  const email = e.target.email.value;
  const name = e.target.name.value;
  const password = e.target.password.value;
  console.log(email, password);

  
  
  setLoginError('')
  if ( email, password) {
    signIn(email, password).then((result) => swal("Good job!", "Login successfully done!", "success")) 
    .catch((error) =>{
      setLoginError(error.message);
    })
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
          <input type="email"  placeholder="email" name='email' className="input input-bordered input-primary w-full max-w-xs" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password </span>
          </label>
          <input type="password" name='password' required placeholder="password"  className="input input-bordered input-primary w-full max-w-xs" />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
      {
        loginError &&   <div className="toast toast-top toast-center">
        <div className="alert alert-info">
          <span>{loginError}</span>
        </div>
       
      </div>
      }
 
        <div className="form-control mt-6">
          <button  className="btn btn-secondary">Login</button>
        </div>

        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn btn-primary">Login with Google</button>
        </div>
        <p>New User? Please <Link to ='/register'><button className="btn btn-active btn-link">Register</button></Link></p>
      </form>

     
    </div>
  </div>
</div>
 </div>
 );
};

export default Login;