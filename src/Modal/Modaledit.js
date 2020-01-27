import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap';
import {connect} from 'react-redux'
import {editFilm} from '../Actions/Action'
import './Modaledit.css'

// import Button from 'react-bootstrap/Button';



class Modaledit extends Component {

    state= {show :false,
        movieimage:"",
        moviename:"",
        rating:""
  }
     handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});
     handleChange=(event)=>{
        this.setState({
             [event.target.name]:event.target.value

    
        })
    
    }
    getMovie=()=>{
      this.setState({ 
        movieimage:this.props.movieEL.movieimage,
        rating:this.props.movieEL.rating,

        moviename:this.props.movieEL.moviename,
      })
    }
    render() {

    return (
    <div>
     
        <Button className="taillebt" variant="primary" onClick={()=>{this.getMovie();this.handleShow()}}>edit
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <input name="movieimage" placeholder="lien image" value={this.state.movieimage} onChange={this.handleChange}/>
              <input name="rating" placeholder="rating" value={this.state.rating} onChange={this.handleChange}/>

              <input name="moviename" placeholder="name" value={this.state.moviename} onChange={this.handleChange}/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={()=>{this.props.handleEdit(
              this.props.movie.id,
             {id:this.props.movie.id,
               movieimage:this.state.movieimage,
              rating:this.state.rating,
              moviename: this.state.moviename});
              this.handleClose()}}>
SaveEdit            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    ) 

  }
    
}
const mapDispatchToProps = dispatch => ({
  // handleEdit:(id,newmovie,newname,newrate)=>dispatch(editFilm(id,newmovie,newname,newrate))
  handleEdit:(id,newmovie)=>dispatch(editFilm(id,newmovie))

})
  
export default connect(null, mapDispatchToProps)(Modaledit)