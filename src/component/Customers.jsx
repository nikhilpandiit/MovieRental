import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCustomers, deleteCustomer } from "../actions/customerAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Customers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customerReducer.customers);
  useEffect(() => {
    dispatch(getAllCustomers());
  }, []);
  return (
    <div>
      <h3 className="d-flex mt-3 justify-content-center" >Customers</h3>
      <div>
        <Link to="/customers/new" className="btn btn-primary btn-sm my-4 mx-4">
          {" "}
          Add Customer
        </Link>
      </div>
      <div className="col">
        {customers.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Phone</th>
                <th scope="col">isGold</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customerobj) => (
                <tr key={customerobj._id}>
                  <td>
                    <Link to={`/customers/${customerobj._id}`}>
                      {customerobj.name}
                    </Link>
                  </td>
                  <td>{customerobj.phone}</td>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(deleteCustomer(customerobj._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>There is no customers in the data</p>
        )}
      </div>
    </div>
  );
};

export default Customers;
