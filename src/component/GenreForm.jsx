import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addGenre, updateGenre, getAllGenres } from "../actions/genreAction";
import { useParams, useNavigate } from "react-router-dom";

const GenreForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const genres = useSelector((state) => state.genreReducer.genres);
  useEffect(() => {
    const genid = params.genreId;
    if (!genid) return;
    console.log(genres);
    const gener = genres.find((g) => g._id === genid);
    setValue("name", gener.name);
    setValue("_id", gener._id);
  }, []);

  const onSubmitHandler = (data) => {
    if (data._id) {
      console.log(data);
      dispatch(updateGenre(data));
      navigate("/genres");
    } else {
      dispatch(addGenre(data, navigate));
      navigate("/genres");
    }
  };

  return (
    <div>
      <h1>Genre Form</h1>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>

          <input
            type="text"
            {...register("name")}
            className="form-control"
            id="name"
          />
          <p>{errors.name?.message}</p>

          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenreForm;
