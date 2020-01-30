import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap';
import {connect} from 'react-redux'
import {editFilm} from '../Actions/Action'
import './Modaledit.css'

// import Button from 'react-bootstrap/Button';



class Modaledit extends Component {

    state= {show :false,
        img:"",
        rate:"",

        moviename:"",
        dat:""
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
       img:this.props.movieEL.images.poster,
       

        rate:this.props.movieEL.rating.watching,
        moviename:this.props.movieEL.title,

        dat:this.props.movieEL.year
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
              <input name="img" placeholder="lien image" value={this.state.img} onChange={this.handleChange}/>
              <input name="rate" placeholder="rating" value={this.state.rate} onChange={this.handleChange}/>

              <input name="moviename" placeholder="name" value={this.state.moviename} onChange={this.handleChange}/>
              <input name="dat" placeholder="dat" value={this.state.dat} onChange={this.handleChange}/>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={()=>{this.props.handleEdit(
              this.props.movie._id,
             {_id:this.props.movie._id,
              images:{poster:this.state.img},
              rating:{watching:this.state.rate},
              title: this.state.moviename,
              year:this.state.dat
 
            });
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