import Lottie from "lottie-react";
import login from "../../assets/icons/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        
        console.log(loggedUser);
        if (loggedUser) {
          Swal.fire({
            title: "Success!",
            text: "User Login Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
       
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try again!",
            text: "Something is wrong!",
            icon: "error",
            confirmButtonText: "Ok",
          })
        }
      });  };
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left w-1/2">
          {/* Lottie Animation */}
          <div className="w-4/5 lg:h-auto lg:mb-10  sm:h-96">
            <Lottie animationData={login} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-center font-bold">Login now!</h1>

            {/* form submit */}
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="login"
                />
              </div>
            </form>

            <p>
              New to car service?{" "}
              <Link to="/signup" className="font-bold text-orange-600 ">
                Sign Up
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
