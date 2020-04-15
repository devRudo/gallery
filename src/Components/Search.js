import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="container mt-2">
                <div className="row m-2">
                    <div className="input-group mb-3 col-md-6 offset-md-3">
                        <input type="text" name="search" id="search" className="form-control" placeholder="Search image by keywords..." onKeyUp={(e) => { this.props.search(e) }} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-dark" id="search"><i className="fas fa-search" onClick={(e) => { this.props.searchButton(e) }}></i></button>
                        </div>
                    </div>
                    <p className="text-muted col-md-6 offset-md-3 d-block"><span className="text-danger font-weight-bold">e.g </span><span className="font-italic"> backgrounds, fashion, nature, science, education, feelings,....</span></p>
                </div>
            </div>
        )
    }
}

export default Search;