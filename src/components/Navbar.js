import React, {useState} from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
    return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/*<li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>*/}
                </ul>
                <div className={`form-check form-switch form-check-reverse text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckReverse"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
                </div>
                </div>
            </div>
            </nav>
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title Here",
    about: "About Text Here"
}