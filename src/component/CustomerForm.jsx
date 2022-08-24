import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, updateCustomer } from "../actions/customerAction";
import { useParams, useNavigate } from "react-router-dom";

const CustomerForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    phone: yup.string().min(7).max(10).required(),
    isGold: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const customers = useSelector((state) => state.customerReducer.customers);
  useEffect(() => {
    const custid = params.custId;
    if (!custid) return;
    console.log(customers);
    const customer = customers.find((c) => c._id === custid);
    setValue("name", customer.name);
    setValue("phone", customer.phone);
    setValue("_id", customer._id);
  }, []);

  const onSubmitHandler = (data) => {
    if (data._id) {
      console.log(data);
      dispatch(updateCustomer(data));
      navigate("/customers");
    } else {
      dispatch(addCustomer(data));
      navigate("/customers");
    }
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center py-4">Customer Form</h1>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="mb-3  ">
         Name
          <input
            style={{ margin: "10px", width: "400px" }}
            type="text"
            {...register("name")}
            className="form-control"
            id="name"
          />
          <p>{errors.name?.message}</p>
          Phone
          <input
            style={{ margin: "10px", width: "400px" }}
            type="phone"
            {...register("phone")}
            className="form-control"
            id="phone"
          />
          
          <p>{errors.phone?.message}</p>

          <input
            style={{ margin: "10px" }}
            type="checkbox"
            className="checkbox"
            {...register("isGold")}
          />
          isGold
          <p>{errors.isGold?.message}</p>
          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
