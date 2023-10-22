import React from "react";

export default function Login() {
  return (
    <>
      <div className="login_relative bg-Hero w-full bg-cover h-[100vh]"></div>
      <div className="login_absolute">
        <form
          className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-w-[600px] max-h-[800px] lg:-mt-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="500"
        >
          <input
            className="form-control border w-[350px] border-black p-2"
            placeholder="Email address"
            type="email"
            name="user_email"
            required
          />
          <input
            className="form-control border border-black p-2"
            placeholder="Password"
            type="password"
            name="user_password"
            required
          />

          <button
            className="btn btn-lg btn-success self-start hover:bg-green  hover:text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
