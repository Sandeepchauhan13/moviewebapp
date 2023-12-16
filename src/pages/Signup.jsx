import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { UserAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
  const [rememberLogin, setRememberLogin]= useState(true);
const[email, setEmail]=useState('');
const[password, setPassword]=useState('');

const{user, signUp} = UserAuth();
const navigate = useNavigate();


const handleFormSubmit = async (e)=>{
  e.preventDefault();
 props.showAlert("Enter your creditential details:", "wait for authentication")
  // console.log(email);
  // console.log(password);
  try{
    await signUp(email, password)
    navigate('/')
  }catch(err){
    console.log(err)
  }
};
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="///" />
        <div  className="bg-black/70 fixed top-0 left-0 w-full h-screen"/>
        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Sign Up</h1>
              <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
                <input className="p-3 my-2 bg-gray-700 rounded"
                type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="email"/>
                <input className="p-3 my-2 bg-gray-700 rounded"
                type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password"/>
                <button className="bg-red-600 py-3 my-6 rounded font-sans-bold"> Sign Up</button>
                <div className="flex justify-between items-center text-gray-600">
                  <p><input type="checkbox" className="mr-2" checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} /> Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className="my-4"><span className="text-gray-600 mr-2">Already subscribed to Netflix?</span>
                <Link to ="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup
