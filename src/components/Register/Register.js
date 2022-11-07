import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {
  const {createUser}=useContext(AuthContext)

    const handleSignup=event=>{
        event.preventDefault()
        const form =event.target
        const email =form.email.value;
        const name=form.name.value
        const password=form.password.value
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
          const user=result.user
          
          console.log('regi user', user)
        })
        .catch(err=>{
          console.error(err)
        })
            
    }  
    return (
        <div className="hero my-20 ">
        <div className="hero-content  grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
          <div className="text-center w-4/5 lg:text-left">
          <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1667667954~exp=1667668554~hmac=dae61cea7d30a91059a3566f5be02fa4d0203d414bef469d6c80f7b15f53c46c" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 py-5">
          <h1 className="text-4xl text-center pt-2 font-bold">Register </h1>
            <form onSubmit={handleSignup}  className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
              </div>

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
                  <a href className="label-text-alt link link-hover" >Forgot password?</a>
                </label>
              </div>


              <div className="form-control mt-6">
                <input type="submit" value="Register" className="btn bg-primary"/>
           
               
              </div>
            </form>

            <p className=' text-center '>Already have an account?<Link className='text-pink-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;