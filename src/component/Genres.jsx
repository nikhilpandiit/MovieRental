import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports.js";
import { getAllGenres, deleteGenre } from "../actions/genreAction";
import { useSelector } from "react-redux/es/exports.js";
const Genres = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genreReducer.genres);
  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <div>
      <h3>Genres</h3>
      <div className="row">
        <div className="col-3">
          <Link to="/genre/new" className="btn btn-primary btn-sm my-4 mx-4">
            Add Genre
          </Link>
        </div>
        <div className="col">
          {genres.length > 0 ? (
            <table className="table my-4 table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th scope="col">Names</th>
                </tr>
              </thead>
              <tbody>
                {genres.map((genresobj) => (
                  <tr key={genresobj._id}>
                    <td>
                      <Link to={`/genres/${genresobj._id}`}>
                        {genresobj.name}
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteGenre(genresobj._id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p> There are no genres in the data.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Genres;
