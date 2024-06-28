/* eslint-disable react/prop-types */
import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const LoginModal = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const { googleSignin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const closeModalAndNavigate = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    navigate("/register");
  };

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        alert("Login successfully: " + result.user.displayName);
      })
      .catch((error) => {
        console.error("Error during sign-in: ", error.message);
      });
  };

  return (
    <dialog id="login_modal" className="modal" ref={modalRef}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <form
          className="card-body modal-action mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-lg font-bold">Login</h3>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white" type="submit">
              Login
            </button>
          </div>
          <p className="text-center my-2">
            Don't have account?{" "}
            <button
              type="button"
              onClick={closeModalAndNavigate}
              className="underline font-bold text-red mr-1"
            >
              SignUp
            </button>
            now
          </p>
        </form>
        {/* social sign in */}
        <div className="flex justify-center gap-4 mb-2">
          <button
            className="btn btn-circle hover:bg-green hover:text-white text-lg"
            onClick={handleGoogleSignin}
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white text-lg">
            <FaFacebook />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white text-lg">
            <FaGithub />
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
