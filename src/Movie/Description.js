import React from "react";
import "./Description.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Description extends React.Component {
  state = {
    id: this.props.match.params.id
  };

  render() {

    const myTab = this.props.movies.filter(e => e.id === Number(this.state.id));
    if (myTab.length === 0) {
      return <Redirect to="/" />;
    } else {
      const { movieimage, moviename,rating } = myTab[0];
      return (
        <div className="details">
          <img  className="poster" src={movieimage} alt="" />
          <div className="movie-details">
            <p>
              <span>Movie Name:</span> {moviename}
            </p>
           
            <p>
              <span>Rating:</span>
              <span style={{ color: "gold" }}>★{rating}</span>
            </p>
          </div>
        </div>
      );
    }
  }
}
const mapState = state => ({
  movies: state.movies
});
export default connect(mapState)(Description);

