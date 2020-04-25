import React from 'react';

const Error = (props) => {
    return (
        <div className="error col-md-12 d-flex flex-column justify-content-center align-items-center text-danger">
            <h1 className="text-muted text-danger">{props.error}</h1>
        </div>
    )
}

export default Error;
