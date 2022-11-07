import { Link } from 'react-router-dom';


const Header = () => {


    return (
        <div className="navbar bg-cyan-600  shadow-xl rounded-xl mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             
            <li className='font-bold'><Link to='/'>Home</Link></li>
            <li className='font-bold'><Link to='/add service'>Add Service</Link></li>
            <li className='font-bold'><Link to='/services'>All Services</Link></li>
             
            </ul>
          </div>
          < a href  className="text-white normal-case text-2xl font-bold">Smile Seeker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            
            <li className='font-bold'><Link to='/'>Home</Link></li>
            <li className='font-bold'><Link to='/add service'>Add Service</Link></li>
            <li className='font-bold'><Link to='/services'>All Services</Link></li>
           
          </ul>
        </div>
        
      </div>
    );
};

export default Header;