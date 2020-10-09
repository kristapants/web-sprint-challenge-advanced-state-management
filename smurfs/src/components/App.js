import React from "react";
import "./App.css";
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'


const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfList />
      <SmurfForm />
    </div>
  );
}

export default App;
