import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap';
import {connect} from 'react-redux'
import {addFilm} from '../Actions/Action'
import './Modal.css'
// import Button from 'react-bootstrap/Button';



class Modales extends Component {

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
    render() {

    return (
    <div>
     
        <Button className="classbtn" variant="primary" onClick={this.handleShow}>
+       </Button>
  
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
            <Button variant="primary"  onClick={()=>{this.props.handleADD(this.state.movieimage,this.state.rating,this.state.moviename);this.handleClose();}}>
ADD            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    ) 

  }
    
}
const mapDispatchToProps = dispatch => ({
  handleADD:(movieimage,rating,moviename)=>dispatch(addFilm(movieimage,rating,moviename))
})
  
export default connect(null, mapDispatchToProps)(Modales)