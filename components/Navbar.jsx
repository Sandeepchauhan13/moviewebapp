import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../src/context/AuthContext';

const Navbar = (props) => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async()=>{
try{
  await logOut();
navigate('/');
}catch(err){
  console.log(err);
} 
  }


  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to='/'>
        <h1 className="uppercase text-white-600 font-nsans-bold cursor-pointer text-5xl">
            Movie - WebApp
            </h1>
           
      </Link>
      {/* <button onClick={props.toggleMode} className="text-white py-3 my-6 rounded font-sans-bold bg-yellow-500">Enable dark mode</button> */}
      {
        user?.email ?(

         <div>
        <Link to='/profile'>
          <button className="capitalize text-white pr-4">Profile</button>
        </Link>
        {/* <Link to='/signup'> */}
          <button onClick={handleLogOut} className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">LogOut</button>
        {/* </Link> */}
      </div>

        ) :
        (
          <div>
        <Link to='/login'>
          <button className="capitalize text-white pr-4">login</button>
        </Link>
        <Link to='/signup'>
          <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">sign up</button>
        </Link>
      </div>
        )
      }
      {/* <div>
        <Link to='/login'>
          <button className="capitalize text-white pr-4">login</button>
        </Link>
        <Link to='/signup'>
          <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">sign up</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
