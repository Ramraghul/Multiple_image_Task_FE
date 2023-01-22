import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="!#">
                        <img src="./forms.png" alt="Logo" width="45" height="50" className="d-inline-block align-text-top" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarNav">
                    <h2>Form</h2>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar