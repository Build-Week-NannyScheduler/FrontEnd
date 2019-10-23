import React from 'react';
import { connect } from 'react-redux';
import { fetchParents } from '../actions';
import Loader from 'react-loader-spinner';
import ParentCard from './ParentCard';


const ParentDashboard = ({ parent }) => {
    

    return (
        <div className="dashboard" >
            <h2>{props.parent.name}</h2>
            <div className="nanny-list'">
                <h2>This is the Parent Dashboard!</h2>
                <hr/>
                {props.isFetching ? (
                    <Loader type="Circles" 
                            color="navy" 
                            height={80} 
                            width={80} 
                    />) :
                    <ul>
                        <ParentCard 
                            className="card"
                            key={parent.id}
                            parent={parent}
                            deleteParent={deleteParent}
                            />
                    </ul>
                }
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