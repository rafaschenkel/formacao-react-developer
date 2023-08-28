import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand bg-primary">
            <div className="container-fluid">
                <Link
                    className="navbar-brand link-opacity-75-hover link-light fw-bold"
                    to="/"
                >
                    DIO Study
                </Link>
                <div>
                    <ul className="navbar-nav fw-semibold">
                        <li className="nav-item">
                            <Link
                                className="nav-link link-opacity-75-hover link-light"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link link-opacity-75-hover link-light"
                                to="/perfil"
                            >
                                Perfil
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
