import React from 'react';
import AppActions from '../../actions/app-actions'

export default () => {
    return (
        <div className="row">
            <div className="input-group pull-right">
	            <input
		        	type="text"
		        	placeholder="Search"
		            className="form-control"
		            onKeyUp={ AppActions.search.bind(this) }/>
            </div>
        </div>
    );
};
