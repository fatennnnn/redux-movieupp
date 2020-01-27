
import {filtrenameFilm,filtrerateFilm} from '../Actions/Action'
import {connect} from 'react-redux'
import './Serchname.css'
import StarRatingComponent from 'react-star-rating-component';
import React, { Component } from 'react'

 class Serchname extends Component {
    
        state = {
          rating: 0
        }
        onStarClick=(nextValue)=> 
            this.setState({rating: nextValue});
          
          
    render() 
    {
        return (
            
             <div>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          onStarClick={(this.props.handeSearchrate(this.state.rating), this.onStarClick)}
        />
            <input placeholder="search for movie"  type="search" 
            onChange={(e)=>{this.props.handleSearchname(e.target.value)}}/>
        </div>
    )
}
}

const mapDispatchToProps = dispatch => {
    return{
    
    // handleEdit:(id,newmovie,newname,newrate)=>dispatch(editFilm(id,newmovie,newname,newrate))
    handleSearchname:(searchname)=>dispatch(filtrenameFilm(searchname)),
    handeSearchrate:(rate)=>dispatch(filtrerateFilm(rate))
  
    }}
    
  export default connect(null, mapDispatchToProps)(Serchname)   
            
        


    