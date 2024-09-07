import React, { useContext } from "react";
import login from "../assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
import icon from "../assets/icon.png";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../components/context/AuthContext";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const { userInfo } = useContext(AuthContext);
  const { signup } = userInfo;

  const onSubmit = (data) => {
    const { email, password, firstName, lastName } = data;

    // Get existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      toast.error("Email is already registered.");
    } else {
      const newUser = {
        email,
        password,
        firstName,
        lastName,
      };

      // Update users in local storage
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Use AuthContext signup to manage authentication state
      signup(newUser);

      toast.success("Sign-up successful!");
      reset();
      navigate("/");
    }
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
              <div className="text-center space-y-1">
                <h1 className="text-2xl font-bold">Welcome To</h1>
                <h1 className="text-4xl font-bold">
                  Furni<span className="text-sky-400">Flex</span>
                </h1>
                <p className="pb-6">Signup for purchase your desire products</p>
              </div>

              <div className="flex w-full gap-4">
                <div className="form-control flex-1">
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    className="input input-bordered w-full"
                    {...register("firstName")}
                  />
                </div>
                <div className="form-control flex-1">
                  <input
                    type="text"
                    placeholder="Last name (optional)"
                    className="input input-bordered w-full"
                    {...register("lastName")}
                  />
                </div>
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
                  Sign Up
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
                <div className="flex justify-center items-center space-x-2 border p-4 border-gray-300 rounded-lg cursor-pointer w-full">
                  <FcGoogle size={25} />
                  <p>Sign In With Google</p>
                </div>
                <div className="flex justify-center items-center space-x-2 border p-4 border-gray-300 rounded-lg cursor-pointer w-full">
                  <BsApple size={25} />
                  <p>Sign In With Apple</p>
                </div>
              </div>
              <p className="text-center font-semibold">
                Have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline hover:text-yellow-700 text-blue-600"
                >
                  Sign In
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

export default SignUp;

// ============================== firebase =============================

// import React, { useContext } from "react";
// import login from "../assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
// import icon from "../assets/icon.png";
// import { FcGoogle } from "react-icons/fc";
// import { BsApple } from "react-icons/bs";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// const SignUp = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const { createUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

//   const onSubmit = (data) => {
//     // console.log(data);
//     createUser(data.email, data.password)
//       .then((result) => {
//         const createUser = result.user;
//         console.log(createUser);
//         reset();
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         console.log(error.message);
//         toast.error("User already in use");
//       });
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="flex flex-col lg:flex-row justify-between items-center w-full">
//         {/* Form Section */}
//         <div className="w-3/4 lg:w-1/2 lg:px-40">
//           <div className="card  bg-base-200">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="card-body space-y-3"
//             >
//               <div className="text-center space-y-1">
//                 <h1 className="text-2xl font-bold">Welcome To</h1>
//                 <h1 className="text-4xl font-bold">
//                   Furni<span className="text-sky-400">Flex</span>
//                 </h1>
//                 <p className="pb-6">Signup for purchase your desire products</p>
//               </div>

//               <div className="flex w-full gap-4">
//                 <div className="form-control flex-1">
//                   <input
//                     type="text"
//                     placeholder="First name (optional)"
//                     className="input input-bordered w-full"
//                     required
//                     {...register("firstName")}
//                   />
//                 </div>
//                 <div className="form-control flex-1">
//                   <input
//                     type="text"
//                     placeholder="Last name (optional)"
//                     className="input input-bordered w-full"
//                     required
//                     {...register("lastName")}
//                   />
//                 </div>
//               </div>

//               <div className="form-control">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="input input-bordered"
//                   required
//                   {...register("email")}
//                 />
//               </div>

//               <div className="form-control">
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="input input-bordered"
//                   required
//                   {...register("password")}
//                 />
//               </div>
//               <div className="flex items-center gap-2 font-semibold">
//                 <input
//                   type="checkbox"
//                   defaultChecked
//                   className="checkbox checkbox-xs"
//                 />
//                 <p>
//                   I agree to the{" "}
//                   <span className="underline">Terms & Policy</span>
//                 </p>
//               </div>
//               <div className="form-control">
//                 <button type="submit" className="btn bg-black text-white">
//                   Sign Up
//                 </button>
//               </div>

//               <div className="flex items-center">
//                 <div className="flex-1 h-px dark:bg-gray-300"></div>
//                 <p className="px-3 text-sm text-center font-semibold dark:text-gray-700">
//                   Or
//                 </p>
//                 <div className="flex-1 h-px dark:bg-gray-300"></div>
//               </div>
//               <div className="flex justify-center gap-3">
//                 <div className="flex justify-center items-center space-x-2 border  p-4 border-gray-300 rounded-lg cursor-pointer w-full">
//                   <FcGoogle size={25} />
//                   <p>Sign In With Google</p>
//                 </div>
//                 <div className="flex justify-center items-center space-x-2 border  p-4 border-gray-300 rounded-lg cursor-pointer w-full">
//                   <BsApple size={25} />
//                   <p>Sign In With Apple</p>
//                 </div>
//               </div>
//               <p className="text-center font-semibold">
//                 Have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="hover:underline hover:text-yellow-700 text-blue-600"
//                 >
//                   Sign In
//                 </Link>
//                 .
//               </p>
//             </form>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="hidden lg:block lg:w-1/2 relative">
//           <img
//             src={login}
//             alt="Login Illustration"
//             className="h-screen object-cover w-full"
//           />
//           {/* Text Overlay */}
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-2">
//             <Link to={"/"}>
//               <img src={icon} alt="" />
//             </Link>
//             <h1 className="text-5xl font-bold text-white">
//               Furni<span className="text-sky-400">Flex</span>
//             </h1>
//             <p className="w-2/3">
//               Discover a seamless shopping experience with our curated
//               collection of products. From fashion to electronics, we bring
//               quality.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
