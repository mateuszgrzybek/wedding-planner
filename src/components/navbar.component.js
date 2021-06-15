import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                        <img alt="wedding-planner-logo" src="/logo.svg" width="28" height="28" />
                    </Link>
                </div>
                <div id="navbarHome" class="navbar-menu">
                    <div class="navbar-start">
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
            </nav>
        );
    }
}
