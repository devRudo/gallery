import React from 'react';

function Category(props) {
    return (
        <div className="container mt-2">
            <div className="row m-2">
                <div className="col-md-12 text-center">
                    <button className="btn btn-lg btn-outline-danger m-2" onClick={(e) => { props.showCategory(e, 'all') }}>ALL</button>
                    <button className="btn btn-lg btn-outline-danger m-2" onClick={(e) => { props.showCategory(e, 'mountains') }}>Mountains</button>
                    <button className="btn btn-lg btn-outline-danger m-2" onClick={(e) => { props.showCategory(e, 'flowers') }}>Flowers</button>
                    <button className="btn btn-lg btn-outline-danger m-2" onClick={(e) => { props.showCategory(e, 'rivers') }}>Rivers</button>
                </div>
            </div>
        </div>
    )
}

export default Category;