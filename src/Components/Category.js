import React from 'react'

class Category extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row m-2">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-lg btn-outline-danger m-2">ALL</button>
                        <button className="btn btn-lg btn-outline-danger m-2">Mountains</button>
                        <button className="btn btn-lg btn-outline-danger m-2">Flowers</button>
                        <button className="btn btn-lg btn-outline-danger m-2">Rivers</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;