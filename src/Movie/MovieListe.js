import { connect } from "react-redux";
import React, { Component } from "react";
import Liste from "./Liste";
import "./MovieListe.css";
import {fetchFilm} from '../Actions/Action'

class MovieListe extends Component {
  
  componentDidMount(){
    console.log('ok')
    this.props.handleFetch();
    console.log(this.props.movies)
}
  render() {
    // console.log('********************' + this.props.searchRate)

    //   const movies=this.props.movies.filter(el =>
        
    //          el.moviename
    //         .toUpperCase()
    //         .includes(this.props.searchNAME.toUpperCase()));
    return (
      <div className="list">
        {
            this.props.movies
            .filter(el=> (el.title.toUpperCase().includes(this.props.searchNAME.toUpperCase())&&(el.rating.watching>=this.props.searchRate)
            ) )
        .map(e => <Liste key={e._id} movie={e} movieEL={e} />)
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
const mapDispatchToProps = dispatch => ({
  handleFetch:()=>dispatch(fetchFilm())
})
  
export default connect(mapState,mapDispatchToProps)(MovieListe);
