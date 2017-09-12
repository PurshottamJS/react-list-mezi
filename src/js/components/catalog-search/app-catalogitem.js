import React from 'react'
import { Link } from 'react-router';
import AppActions from '../../actions/app-actions'

export default ( props ) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="container2">
                    <h4>{ props.item.itemTitle }</h4>
                </div>
                <img src="http://placehold.it/200x200" width="100%" className="img-responsive" />
                <div className="container2">
                    <p><b>RS. { props.item.price }</b></p>
                    <p>EMI from Rs. {props.item.emiPrice}</p>
                </div>
            </div>
        </div>
    );
};
