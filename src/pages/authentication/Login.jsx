import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 w-1/3 rounded-lg justify-center items-center text-center">
        <div className="text-center">
          <h2 className="font-bold text-lg">Logo</h2>
          <h1 className="text-2xl font-extrabold text-4xl">Welcome Back</h1>
          <p className="text-gray-500 text-xs my-2">
            Please login to your account
          </p>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Email address"
            className="border-2 border-gray-300 p-2 mt-2 w-full rounded-lg"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border-2 border-gray-300 p-2 mt-2 w-full rounded-lg "
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 mt-1 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p className="text-end text-gray-500 mb-4">Forgot Password?</p>
          <Link to="/dashboard">
            <button className="border-2 border-gray-300 bg-orange-500 text-white font-semibold p-2 mt-2 w-full rounded-lg">
              Login
            </button>
          </Link>
          <div className="flex flex-col space-y-4 my-2">
            <p className="text-gray-500">Or login with</p>
            <div className="flex flex-row gap-2 justify-center">
            <Link to="/users">
              <p className="flex flex-row gap-2 w-full items-center justify-center p-2 rounded-lg border">
                <span>
                  <FcGoogle />{" "}
                </span>{" "}
                <span>Google</span>
              </p>
                </Link>
                <Link to="/settings">
              <p className="flex flex-row gap-2 w-full items-center justify-center p-2 rounded-lg border">
                <span>
                  <FaFacebook className="text-blue-500" />{" "}
                </span>{" "}
                <span>Facebook</span>
              </p>
              </Link>
            </div>
          </div>
          <Link to="/profile">
          <p>
            Don't have an account?
            <span className="text-orange-500">Signup</span>
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
