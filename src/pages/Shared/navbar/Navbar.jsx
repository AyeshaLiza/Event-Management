import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import googlepic from '../../../assets/googlepic.jpg'


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);

    const handleLogout = () =>{
      logOut()
      .then()
      
    }
    



 const navLinks =<>
<li>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
</li>

<li> <NavLink
  to="/venue"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Venue
</NavLink>
</li>
 
 <li>
 <NavLink
  to="/event"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Upcoming Events
</NavLink>
 </li>

 <li><NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink>
  </li>
  
<li>
<NavLink
  to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Regester
</NavLink>  
</li>
 
</>

 return (
  <div>
    <div className="navbar h-28 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>

<h1 className="text-3xl font-semibold text-violet-900">Future Education</h1>         
  </div>
  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal px-1">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
       <div>
      <img className="rounded-full w-10 h-10" src={googlepic} alt="" />
      <p>{user.email}
      </p> 
        </div>
    <button onClick={handleLogout} className="btn btn-secondary">Logout</button> 
    
    </>  : <Link to={"/login"}>
      <btn className="btn btn-secondary">Login</btn>
    </Link>
    }
   
  </div>
</div>
      </div>
 );
};

export default Navbar;