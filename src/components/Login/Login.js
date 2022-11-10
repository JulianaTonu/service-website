import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useTitle from './../../hooks/useTitle';

const Login = () => {
 const {signIn,signInWithGoogle,loading }=useContext(AuthContext)
 const location=useLocation()
 const navigate =useNavigate()
useTitle('Login')

//add spinner
if(loading){
  return (
      <button className="btn loading "></button>
  )
}


    const handleSubmit=event=>{

      const from =location.state?.from?.pathname || '/' ;
    event.preventDefault()
        const form =event.target
        const email =form.email.value;     
        const password=form.password.value
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
        const user=
        result.user
        console.log('login user', user)

const currentUser= {
  email:user.email
}
console.log(currentUser)

//jwt token

fetch('https://service-website-server.vercel.app/jwt',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(currentUser)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  localStorage.setItem('servicetoken',data.token)
})

        navigate(from,{replace:true})
      })
      .catch(err=>console.error(err))
      }

        const handleGooglesignIn=()=>{
          
          signInWithGoogle ()
        .then(result=>{
        const user = result.user
        console.log(user)   
      })
      .catch(err=>console.error(err))
      }
   
    return (
        <div className="hero my-20 ">
        <div className="hero-content  grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
          <div className="text-center w-4/5 lg:text-left">
            <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1667667954~exp=1667668554~hmac=dae61cea7d30a91059a3566f5be02fa4d0203d414bef469d6c80f7b15f53c46c" alt="" />
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 py-5">
          <h1 className="text-4xl text-center pt-2 font-bold">Login </h1>
            <form onSubmit={handleSubmit}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-2">
                <input type="submit" value="Login" className="btn bg-primary font-bold"/>
           
              </div>

              {/* //google */}
              <div className="form-control mt-2">
            
           <button className="btn bg-success font-bold" type="submit" onClick={handleGooglesignIn}><FcGoogle/>Google</button>
              </div>
            </form>

            <p className=' text-center font-semibold '>New to this website? Please <Link className='text-pink-600 font-bold' to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;