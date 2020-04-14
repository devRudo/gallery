import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row m-2">
                    <div className="input-group mb-3 col-md-6 offset-md-3">
                        <input type="text" name="search" id="search" className="form-control" placeholder="Search image by keywords..." />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-dark" id="search"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;