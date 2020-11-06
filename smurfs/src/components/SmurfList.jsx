import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchSmurf();
  }, []);

  return (
    <div>
      <h2>Smurf List</h2>
      {props.smurfs.map((smurf) => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfList);