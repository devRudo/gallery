import React from 'react';

const Loading = () => {
    return (
        <div className="loading col-md-12 d-flex justify-content-center align-items-center">
            <div className="circle">
                <div className="inner-circle"></div>
                <div className="rotating-circle"></div>
            </div>
        </div>
    )
}

export default Loading;
