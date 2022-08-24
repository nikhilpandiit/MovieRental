import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().min(5).max(50).required(),
    email: yup.string().min(5).max(255).required().email(),
    password: yup.string().min(5).max(255).required(),
    isAdmin: yup.boolean().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(registerUser(data));
    navigate("/login");
  };

  return (
    <div style={{ width: "400px", margin: "10px auto" }}>
      <form className="form py-4 my-5" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="d-flex justify-content-center">
          <span className="contact-form">
            <strong> Register user </strong>
          </span>
        </div>
        <div className="name">
          <input
            style={{ width: "400px", margin: "10px" }}
            className="name"
            type="text"
            {...register("name")}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            style={{ width: "400px", margin: "10px" }}
            type="email"
            {...register("email")}
            className="email"
            placeholder="Enter email address"
          />
        </div>
        <div>
          <input
            style={{ width: "400px", margin: "10px" }}
            type="password"
            {...register("password")}
            className="phone"
            placeholder="Enter password"
          />
        </div>
        <div>
          <input
            style={{ margin: "10px" }}
            type="checkbox"
            className="checkbox"
            {...register("isAdmin")}
          />{" "}
          isAdmin
        </div>

        <div>
          <button
            className="btn btn-primary"
            style={{ margin: "10px", width: "400px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
