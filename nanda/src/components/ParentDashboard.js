import React from 'react';
import { connect } from 'react-redux';

// import Loader from 'react-loader-spinner';

import { fetchParents } from '../actions';

const ParentDashboard = props => {
    

    return (
        <div className="dashboard" >
            <h2>{props.parent.name}</h2>
            <div className="nanny-list'">
            <h2>This is the Parent Dashboard!</h2>
        <hr/>
        {/* {props.isFetching ? (
          <Loader type="Circles" 
                color="navy" 
                height={80} 
                width={80} 
          />) :
          <ul>{props.parents.filter(parent.id => {
            return (
            
                <SmurfCard 
                className="card"
                key={smurf.id}
                smurf={smurf}
                deleteSmurf={deleteSmurf}
                />
            )
          })}
          </ul>
        } */}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isFetching: true,
    // nannyRequest: true,
    // nanny: state.nanny.id
});
export default connect(mapStateToProps, { fetchParents })(ParentDashboard);