import React, { Component } from 'react'

class Image extends Component {
    render() {
        return (
            <div className="col-md-3 p-2">
                <div className="image img-thumbnail m-2">
                    <img src={this.props.src} alt="" />
                </div>
            </div>
        )
    }
}

export default Image;