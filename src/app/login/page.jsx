"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { loginSchema } from "../Schemas/login";

const Login = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <section
      className="h-[86vh] w-full flex justify-center items-center bg-left-bottom  md:bg-right-top lg:bg-right-bottom"
      style={{
        backgroundImage: "url('/images/login.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className=" border shadow-xl py-16 rounded-xl w-[80%] md:w-[40%] 2xl:w-2/6">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <br />
        <hr className="mx-10" />
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex  justify-center items-center flex-col "
        >
          <div className="relative z-0 my-5">
            <input
              type="text"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-oranges peer"
              placeholder=" "
              
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <label
              htmlFor="Email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oranges peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>

            {errors.email && touched.email ? (
              <p className="text-red-600 italic">{errors.email}</p>
            ) : null}
          </div>
          <br />

          <div className="relative z-0 my-5">
            <input
              type="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-oranges peer"
              placeholder=" "
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <label
              htmlFor="Password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oranges peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>

            {errors.password && touched.password ? (
              <p className="text-red-600 italic">{errors.password}</p>
            ) : null}
          </div>

          <br />
          <br />

          <div className="flex gap-1">
            <h1>Don't have Account?</h1>
            <Link href="/signup" className="text-blue-600 cursor-pointer">
              SignUp
            </Link>
          </div>

          <div className="mt-8">
            <button
              className="py-3 px-10  bg-oranges text-white transition-all duration-500 ease-in hover:text-oranges hover:bg-white rounded-md"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Login;
