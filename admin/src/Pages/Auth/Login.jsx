import React from "react";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import AddBtn from "../../Components/AddBtn";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-2">
      <div className="login-container shadow w-[25rem] mx-auto h-[25rem] p-8">
        <div className="form-container">
          <div className="flex justify-between items-center gap-10">
            <h1 className="text-2xl border-b-2 border-black">Welcome back</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4148/4148675.png"
              alt=""
              className="w-[70px] h-[70px]"
            />
          </div>
          <div>
            <h3 className="text-2xl uppercase py-1 cursive">Admin</h3>
          </div>
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          > */}
          {/* email field */}
          <div className="flex-wrap flex flex-col my-1">
            <label htmlFor="" className="mb-2">
              Email
            </label>
            <InputField />
          </div>
          {/* password */}
          <div className="flex-wrap flex flex-col my-1">
            <label htmlFor="" className="mb-2">
              Password
            </label>
            <InputField />
          </div>
          {/*  login button  */}
          <div className=" my-2">
            <AddBtn link="dashboard" />
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
