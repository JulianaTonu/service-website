import { Link } from 'react-router-dom';


const Register = () => {
   
    return (
        <div className="hero my-20 ">
        <div className="hero-content  grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
          <div className="text-center w-4/5 lg:text-left">
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 py-5">
          <h1 className="text-4xl text-center pt-2 font-bold">Register </h1>
            <form className="card-body">

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
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
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