import React, { useContext } from "react";
import login from "../assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
import icon from "../assets/icon.png";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    // console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid User");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        {/* Form Section */}
        <div className="w-3/4 lg:w-1/2 lg:px-40">
          <div className="card bg-base-200">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body space-y-3"
            >
              <div>
                <h1 className="text-3xl font-semibold">Welcome Back!</h1>
                <p className="pb-6 pt-2">
                  Enter your Credentials to access your account
                </p>
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
              </div>

              <p className="link-hover text-blue-600 text-sm font-semibold text-end cursor-pointer">
                Forgot password
              </p>
              <div className="flex items-center gap-2 font-semibold">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs"
                />
                <p>
                  I agree to the{" "}
                  <span className="underline">Terms & Policy</span>
                </p>
              </div>
              <div className="form-control">
                <button type="submit" className="btn bg-black text-white">
                  Sign In
                </button>
              </div>

              <div className="flex items-center">
                <div className="flex-1 h-px dark:bg-gray-300"></div>
                <p className="px-3 text-sm text-center font-semibold dark:text-gray-700">
                  Or
                </p>
                <div className="flex-1 h-px dark:bg-gray-300"></div>
              </div>
              <div className="flex justify-center gap-3">
                <div className="flex justify-center items-center space-x-2 border  p-4 border-gray-300 rounded-lg cursor-pointer w-full">
                  <FcGoogle size={25} />
                  <p>Sign In With Google</p>
                </div>
                <div className="flex justify-center items-center space-x-2 border  p-4 border-gray-300 rounded-lg cursor-pointer w-full">
                  <BsApple size={25} />
                  <p>Sign In With Apple</p>
                </div>
              </div>
              <p className="text-center font-semibold">
                Have an account?{" "}
                <Link
                  to="/signup"
                  className="hover:underline hover:text-yellow-700 text-blue-600"
                >
                  Sign up
                </Link>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={login}
            alt="Login Illustration"
            className="h-screen object-cover w-full"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-2">
            <Link to={"/"}>
              <img src={icon} alt="" />
            </Link>
            <h1 className="text-5xl font-bold text-white">
              Furni<span className="text-sky-400">Flex</span>
            </h1>
            <p className="w-2/3">
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
