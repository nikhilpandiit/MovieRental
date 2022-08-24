import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { yupResolver } from "@hookform/resolvers/yup";
import { addMovies, updateMovie } from "../actions/movieAction";
import { useParams, useNavigate } from "react-router-dom";
const MoviesForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup.string().min(3).max(50).required(),
    genreId: yup.string().required(),
    dailyRentalRate: yup.number().min(0).max(255).required(),
    numberInStock: yup.number().min(0).max(255).required(),
    liked: yup.boolean().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const movies = useSelector((state) => state.movieReducer.movies);
  const genres = useSelector((state) => state.genreReducer.genres);
  useEffect(() => {
    const movieid = params.movieid;
    if (!movieid) return;
    console.log(movies, movieid);
    const movie = movies.find((m) => m._id === movieid);
    console.log(movie.genre._id);
    setValue("title", movie.title);
     setValue("genreId", movie.genre._id);
     setValue("dailyRentalRate", movie.dailyRentalRate);
     setValue("numberInStock", movie.numberInStock);
     setValue("liked", movie.liked);
  }, []);

  const onSubmitHandler = (data) => {
    if (data._id) {
      console.log(data);
      dispatch(updateMovie(data));
      navigate("/movies");
    } else {
      dispatch(addMovies(data, navigate));
      navigate("/movies");
    }
  };

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center my-4 py-4">Movies Form</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="mb-3 ">
          <label className="form-label">Title</label>
          <input
            type="text"
            {...register("title")}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genres</label>
          <select
            className="form-select"
            {...register("genreId")}
            aria-label="Default select example"
          >
            {genres.map((gener) => (
              <option key={gener._id} value={gener._id}>
                {gener.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Rental Rate</label>
          <input
            type="text"
            {...register("dailyRentalRate")}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="text"
            {...register("numberInStock")}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              {...register("liked")}
              aria-label="Checkbox for following text input"
            />
            Like
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary width:233px"
          style={{ width: "1080px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MoviesForm;
