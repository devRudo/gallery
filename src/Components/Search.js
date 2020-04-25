import React from 'react';

const Search = (props) => {
    return (
        <div className="container mt-2">
            <div className="row m-2">
                <div className="input-group mb-3 col-md-6 offset-md-3">
                    <input type="text" name="search" id="search" className="form-control" placeholder="Search image by keywords..." onChange={(e) => { props.search(e) }} />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-dark" id="search"><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <p className="text-muted col-md-6 offset-md-3 d-block"><span className="text-danger font-weight-bold">e.g </span><span className="font-italic"> backgrounds, fashion, nature, science, education, feelings,....</span></p>
            </div>
        </div>
    );
}

export default Search;