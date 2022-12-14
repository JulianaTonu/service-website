import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from './../../context/AuthProvider';

const Header = () => {
const {user,logout}=useContext(AuthContext)

const handleLogout=()=>{
  logout()
  .then(()=>{})
  .catch(err=>console.error(err))
}
    return (
        <div className="navbar bg-blue-900 text-grey-200   shadow-xl rounded-xl mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             
            <li className='font-bold  font-serif'><Link to='/'>Home</Link></li>
            <li className='font-bold  font-serif'><Link to='/blog'>Blog</Link></li>
            
            <li className='font-bold  font-serif'><Link to='/services'>All Services</Link></li>

{/* //add condition for login and logout           */}
            {
          user?.email ?
          <>
          <li className='font-bold  font-serif'><Link to='/add service'>Add Service</Link></li>
          <li className='font-bold  font-serif'><Link to='/myreviews'>My Review</Link></li>
         <li className='text-primary font-bold mt-3'>{user?.displayName}</li>
          <li className=''><button className='btn btn-ghost font-bold  font-serif' onClick={handleLogout}>Logout</button></li>
          </>
            :
           <>
                <li className='font-bold   font-serif'><Link to='/login'>Login</Link></li>
                <li className='font-bold  font-serif'><Link to='/register'>Register</Link></li>
                </>
          }
             
            </ul>
          </div>
          < a href  className="text-white normal-case text-2xl font-bold flex d-flex font-mono"><img src="https://www.smileseekersbd.com/wp-content/uploads/2021/06/Smile-Seeker-Signature-White.png" className='w-44 ' alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            
            <li className='font-bold text-white font-serif'><Link to='/'>Home</Link></li>
            <li className='font-bold text-white font-serif'><Link to='/blog'>Blog</Link></li>
            
            <li className='font-bold text-white font-serif'><Link to='/services'>Services</Link></li>
            {
          user?.email ?
          <>
          <li className='font-bold text-white font-serif'><Link to='/add'>Add Service</Link></li>
          <li className='font-bold text-white font-serif'><Link to='/myreviews'>My Review</Link></li>
         <span 
         className='text-white font-bold text-lg  font-serif pt-2'
         
         >{user?.displayName}</span>
          <span className=''><button className='btn btn-ghost font-bold text-white font-serif' onClick={handleLogout}>Logout</button></span>
          </>
            :
           <>
                <li className='font-bold text-white font-serif'><Link to='/login'>Login</Link></li>
                <li className='font-bold text-white font-serif'><Link to='/register'>Register</Link></li>
                </>
          }
           
          </ul>
        </div>
        
      </div>
    );
};

export default Header;