"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { signupSchema } from "../Schemas/signup";

const signup = () => {
  const { values, errors, handleChange, handleSubmit, touched, resetForm } =
    useFormik({
      initialValues: {
        UserName: "",
        Email: "",
        PhoneNumber: "",
        Password: "",
      },
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
        resetForm();
      },
    });

  return (
    <section
      className="h-[86vh] w-full flex justify-center items-center bg-left-bottom  md:bg-right-top lg:bg-right-bottom"
      style={{
        backgroundImage: "url('/images/signup.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "25rem",
      }}
    >
      <main className=" border shadow-xl py-16 rounded-xl w-[80%] md:w-[40%] 2xl:w-2/6">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <br />

        <hr className="mx-10" />

        <form
          onSubmit={handleSubmit}
          className="mt-5 flex  justify-center items-center flex-col "
        >
          <div className="relative z-0 my-5">
            <input
              type="text"
              id="UserName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-oranges peer"
              placeholder=" "
              name="UserName"
              value={values.UserName}
              onChange={handleChange}
            />
            <label
              htmlFor="UserName"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oranges peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              User Name
            </label>
            {errors.UserName && touched.UserName ? (
              <p className="text-red-600 italic">{errors.UserName}</p>
            ) : null}
          </div>
          <br />
          <div className="relative z-0 my-5">
            <input
              type="text"
              id="Email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-oranges peer"
              placeholder=" "
              name="Email"
              value={values.Email}
              onChange={handleChange}
            />
            <label
              htmlFor="Email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oranges peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
            {errors.Email && touched.Email ? (
              <p className="text-red-600 italic">{errors.Email}</p>
            ) : null}
          </div>
          <br />

          <div className="relative z-0 my-5">
            <input
              type="number"
              id="PhoneNumber"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-oranges peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=" "
              name="PhoneNumber"
              value={values.PhoneNumber}
              onChange={handleChange}
            />
            <label
              htmlFor="Phone number"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oranges peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Phone Number
            </label>
            {errors.PhoneNumber && touched.PhoneNumber ? (
              <p className="text-red-600 italic">{errors.PhoneNumber}</p>
            ) : null}
          </div>
          <br />

          <div className="relative z-0 my-5">
            <input
              type="text"
              id="Password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-oranges peer"
              placeholder=" "
              name="Password"
              value={values.Password}
              onChange={handleChange}
            />
            <label
              htmlFor="Password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oranges peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
            {errors.Password && touched.Password ? (
              <p className="text-red-600 italic">{errors.Password}</p>
            ) : null}
          </div>

          <br />
          <br />

          <div className="flex gap-1">
            <h1>Already have Account?</h1>
            <Link href={"/login"} className="text-blue-600 cursor-pointer">
              Login
            </Link>
          </div>

          <div className="mt-8">
            <button
              className="py-3 px-10  bg-oranges text-white transition-all duration-500 ease-in hover:text-oranges hover:bg-white rounded-md"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default signup;
