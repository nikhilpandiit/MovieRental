import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux/es/exports";
import { loginUser } from "../actions/loginAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().min(5).max(255).required().email(),
    password: yup.string().min(5).max(255).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(loginUser(data, navigate));
    navigate("/genres");
  };
  return (
    <div className="login-form" style={{ width: "400px", margin: "10px auto" }}>
      <form className="login my-5 py-5" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="d-flex justify-content-center">
          <span className="contact-form">
            <strong > Login Form </strong>
          </span>
        </div>
        <div>
          <input
            style={{ margin: "10px", width: "400px" }}
            type="email"
            className="email"
            {...register("email")}
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <input
            style={{ margin: "10px", width: "400px" }}
            type="password"
            className="password"
            {...register("password")}
            placeholder="Enter your password"
          />
        </div>

        <div>
          <button
            className=" btn btn-primary"
            style={{ margin: "10px", width: "400px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
