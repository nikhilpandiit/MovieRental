import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Customers from "./component/Customers";
import Genres from "./component/Genres";
import Login from "./component/Login";
import Movies from "./component/Movies";
import Register from "./component/Register";
import Error from "./component/Error";
import Rental from "./component/Rental";
import GenreForm from "./component/GenreForm";
import MoviesForm from "./component/MoviesForm";
import CustomerForm from "./component/CustomerForm";

import "./index.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Movies />}></Route>
            <Route path="customers" element={<Customers />} />
            <Route path="customers/new" element={<CustomerForm />} />
            <Route path="customers/:customerId" element={<CustomerForm />} />
            <Route path="movies/:movieid" element={<MoviesForm />} />
            <Route path="genres" element={<Genres />} />
            <Route path="genre/new" element={<GenreForm />} />
            <Route path="genres/:genreId" element={<GenreForm />} />
            <Route path="login" element={<Login />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/new" element={<MoviesForm />} />
            <Route path="register" element={<Register />} />
            <Route path="error" element={<Error />} />
            <Route path="rental" element={<Rental />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
