import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/index.js'

const SmurfForm = (props) => {

  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
  });

  const submitHandler = (e) => {
    e.preventDefault()
    props.postSmurf(smurf)
    document.getElementById('smurfForm').reset()
  } ;

  const inputHandler = (e) => {
    e.preventDefault()
    setSmurf({ ...smurf, [e.target.name]: e.target.value })
  };

  return (
    <div>
      <h2>SmurfForm </h2>
      <form id="smurfForm">
        <input 
            name="name"
            type="text" 
            placeholder="Name" 
            value={props.name} 
            onChange={inputHandler} 
        />
        <input 
            name="age"
            type="text" 
            placeholder="Age" 
            value={props.age}
            onChange={inputHandler} 
        />
        <input 
            name="height"
            type="text" 
            placeholder="Height" 
            value={props.height}
            onChange={inputHandler} 
        />

        <button onClick={submitHandler}>Add a smurf</button>
      </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    errors: state.errors,
  }
}

export default connect( mapStateToProps, { postSmurf })(SmurfForm)
