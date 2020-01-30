import React, { Component } from 'react'
import './Liste.css'
import {remoFilm,} from '../Actions/Action'
import {connect} from 'react-redux'
import Modaledit from '../Modal/Modaledit'
import {Link} from 'react-router-dom'

class Liste extends Component {
   
    render() {
        // const { movie }=this.props;
        // console.log(movie.images);
        const Rating = (count) => {
            let stars = []
          if  (count <=5 ) 
          {
           for (let i = 0; i < 5; i++) {
                if(i < count) {
                    stars.push(<span key={i}>★</span>)
                }
                else {
                    stars.push(<span key={i}>☆</span>)
                }
            }
            return (
                <div className="movieRating">{stars}</div>
            )
          }
            // else alert (" Error ! Rating > 5 ")
        }
        return (
            <div className="liste"> 
    <img className="image" src={this.props.movie.images.poster}/>
    <div>{Rating(this.props.movie.rating.watching)}</div>

    <p>{this.props.movie.title}</p>
        <p>{this.props.movie.year}</p>
    {/* <Link to={"/" + this.props.movie._id}> */}
    <Link to={`/${this.props.movie._id}`}>
                <button className="marg"> Movie description</button>
              </Link>
              <div className="lign">

        <Modaledit movie={this.props.movie} movieEL={this.props.movieEL}/>
        <button className="taillebtn" onClick={()=>this.props.handleREMO(this.props.movie._id)}>Remove</button>

    </div>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    handleREMO:(_id)=>dispatch(remoFilm(_id)),
  })
    
  export default connect(null,mapDispatchToProps)(Liste)