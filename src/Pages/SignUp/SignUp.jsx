import Lottie from "lottie-react";
import signup from "../../assets/icons/signup.json";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          Swal.fire({
            title: "Success!",
            text: "User Created Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Try again!",
            text: "User already in use!",
            icon: "error",
            confirmButtonText: "Ok",
          })
        }
      });
      
  };

  // google signUp
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200 my-5">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left w-1/2">
          {/* Lottie Animation */}
          <div className="w-full lg:h-auto sm:h-96">
            <Lottie animationData={signup} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-center font-bold">Register Now!</h1>

            {/* form submit */}
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary text-white"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center">
              <p>Or Sign Up With</p>
              <div className="flex justify-center gap-3 mt-3">
                <FaFacebook className="text-4xl text-blue-500" />
                <FcGoogle onClick={handleGoogleSignIn} className="cursor-pointer text-4xl" />
              </div>
            </div>
            <p>
              Already have an account? go to{" "}
              <Link to="/login" className="font-bold text-orange-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
