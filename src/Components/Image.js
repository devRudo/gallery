import React from 'react';

export default function Image(props) {
    return (
        <div className="col-md-3 p-2">
            <div className="image img-thumbnail m-2">
                <img src={props.src} alt="" />
            </div>
        </div>
    )
}
