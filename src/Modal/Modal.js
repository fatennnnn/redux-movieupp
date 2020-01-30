import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap';
import {connect} from 'react-redux'
import {addFilm} from '../Actions/Action'
import './Modal.css'
// import Button from 'react-bootstrap/Button';



class Modales extends Component {

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
    render() {

    return (
    <div>
     
        <Button className="classbtn" variant="primary" onClick={this.handleShow}>
+       </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              

              <input name="img" placeholder="lien image" value={this.state.img} onChange={this.handleChange}/>
              <input name="rate" placeholder="rating" value={this.state.rate} onChange={this.handleChange}/>

              <input name="moviename" placeholder="name" value={this.state.moviename} onChange={this.handleChange}/>
              <input name="dat" placeholder="date" value={this.state.dat} onChange={this.handleChange}/>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            {/* <Button variant="primary"  onClick={()=>{this.props.handleADD(this.state.img,this.state.rate,this.state.moviename,this.state.dat);this.handleClose();}}>
              
ADD            </Button> */}
<Button variant="primary"  onClick={()=>{this.props.handleADD( {
  _id: Date.now().toString(),
  images:{poster:this.state.img},
              rating:{watching:this.state.rate},
              title: this.state.moviename,
              year:this.state.dat}
 );this.handleClose();}}>
ADD            </Button>

          </Modal.Footer>
        </Modal>
        </div>
    ) 

  }
    
}
const mapDispatchToProps = dispatch => ({
  handleADD:(movie)=>dispatch(addFilm(movie))
})
  
export default connect(null, mapDispatchToProps)(Modales)