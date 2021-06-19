import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthNav from './auth-nav';

export default class Navbar extends Component {
    render() {
        return (
            <nav
                className="navbar is-primary"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img
                            alt="wedding-planner-logo"
                            src="/logo.svg"
                            width="28"
                            height="28"
                        />
                    </Link>
                    <Link
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbarHome" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            Wedding Plans
                        </Link>

                        <Link to="/create" className="navbar-item">
                            Create a new Wedding Plan
                        </Link>
                        <Link to="/user" className="navbar-item">
                            Create a new User
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <AuthNav />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
