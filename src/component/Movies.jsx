import React from "react";
import { Link } from "react-router-dom";
import { getAllMovies, deleteMovie } from "../actions/movieAction";
import { useDispatch } from "react-redux/es/exports.js";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div className="custom-background">
      <h3 className="d-flex mt-3 justify-content-center text-white">Movies</h3>
      <div className="col-3">
        <Link to="/movies/new" className="btn btn-primary btn-sm my-4 mx-4">
          Add Movies
        </Link>
      </div>
      <div className="container">
        <form>
          <div className="table-color">
            {movies.length > 0 ? (
              <table className="text-center table text-white ">
                <thead>
                  <th scope="col">Title</th>
                  <th>Number in Stock</th>
                  <th>Daily Rental Rate</th>
                  <th>Generas</th>
                  <th>is likes</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {console.log(movies)}
                  {movies.map((moviesobj) => (
                    <tr key={moviesobj._id}>
                      <td>
                        <Link to={`/movies/${moviesobj._id}`}>
                          {moviesobj.title}
                        </Link>
                      </td>
                      <td>{moviesobj.numberInStock}</td>
                      <td>{moviesobj.dailyRentalRate}</td>
                      <td>{moviesobj.genre.name}</td>
                      <td>
                        {moviesobj.liked ? (
                          <i className="fa fa-heart"></i>
                        ) : (
                          <i className="fa fa-heart-o"></i>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => dispatch(deleteMovie(moviesobj._id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ color: "white" }}>
                {" "}
                There are no movies in the database
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movies;
