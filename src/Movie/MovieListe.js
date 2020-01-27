import { connect } from "react-redux";
import React, { Component } from "react";
import Liste from "./Liste";
import "./MovieListe.css";
class MovieListe extends Component {
  render() {
    console.log('********************' + this.props.searchRate)

    //   const movies=this.props.movies.filter(el =>
        
    //          el.moviename
    //         .toUpperCase()
    //         .includes(this.props.searchNAME.toUpperCase()));
    return (
      <div className="list">
        {
            this.props.movies.filter(el=> (el.moviename.toUpperCase().includes(this.props.searchNAME.toUpperCase())&&(el.rating>=this.props.searchRate)
            ) )
        .map(e => <Liste key={e.id} movie={e} movieEL={e} />)
  }
      </div>
    );
  }
}
const mapState = state => ({
  movies: state.movies,
  searchNAME: state.searchname,
  searchRate: state.rate
});

export default connect(mapState)(MovieListe);
