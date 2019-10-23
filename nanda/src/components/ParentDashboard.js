import React from 'react';
import { connect } from 'react-redux';
import { fetchParents } from '../actions';
import Loader from 'react-loader-spinner';
import ParentCard from './ParentCard';


const ParentDashboard = props => {
    console.log("PARENT DASHBD ", props);

    // useEffect(() => {
    //     props.fetchParent();
    // }, []);

    return (
        <div className="dashboard" >
            <h2>Parent here</h2>
            <div className="nanny-list'">
                <h2>This is the Parent Dashboard!</h2>
                <hr/>
                {props.fetchParent ? (
                    <Loader type="Circles" 
                            color="navy" 
                            height={80} 
                            width={80} 
                    />) :
                    <ul>
                        {/* <ParentCard 
                            className="card"
                            key={parent.id}
                            parent={parent}
                            // editParent={editParent}
                            // deleteParent={deleteParent}
                            /> */}
                    </ul>
                }
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    isFetching: true,
    
});
export default connect(mapStateToProps, {  })(ParentDashboard);