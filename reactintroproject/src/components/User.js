import React, { Component } from 'react'
import PropTypes from "prop-types"
 class User extends Component {
     constructor(props){
       super(props)
       this.state ={
           isOnline:true,
       }
     }
     
  render() {
      const{Name,Surname,Age}=this.props;
      let word = this.state.isOnline?"online" :"offline";
    return (
      <div className='container'>
          <div className='row'>
              <div className='col-6'>
                  <div className='card mt-2'>
                      <div className='card-title'>{Name}<span className='ml-1' style={{color:"red"}}>  situation</span>-{word}</div>
                      <div className='card-body'>
                          
                          <p>
                              {Surname} 
                              
                          </p>
                          <p>{Age} </p>
                          <button className='btn btn-outline-secondary'>Delete</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
User.propTypes={
    name : PropTypes.string.isRequired,
    Surname :PropTypes.string.isRequired,
    Age :PropTypes.number.isRequired
}
User.defaultProps={
    Age :30
}
export default User