import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-md bg-white w-full mx-auto flex items-center justify-center mt-24 shadow-lg">
      <form
        className="card-body modal-action mt-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-lg font-bold">Create Account</h3>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email")}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password")}
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-green text-white" type="submit">
            Login
          </button>
        </div>
        <p className="text-center my-2">
          Have an account ?
          <button
            className="underline font-bold text-red ml-2"
            onClick={() => document.getElementById("login_modal").showModal()}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
