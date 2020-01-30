import React from "react";
import "./Description.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Description extends React.Component {
  state = {
    id: this.props.match.params._id
  };

  render() {
    console.log ('********************' + this.props.movies._id)

    const myTab = 
    this.props.movies.filter(e => e._id === (this.state.id))
    if (myTab.length === 0) {
      return <Redirect to="/" />;
    } else {

      const { images,rating, title,year} = myTab[0];
      return (
        <div className="details">
          <img  className="poster" src={images.poster} alt="" />
          <div className="movie-details">
            <p>
              <span>Movie Name:</span> {title}            </p>

            <p>  <span>Movie Year:</span> {year}

            </p>
           
            <p>
              <span>Rating:</span>
              <span style={{ color: "gold" }}>★{rating.watching}</span>
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

