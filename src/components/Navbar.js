import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

class Navbar extends React.Component {
    state = { currentPage: '' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <div className="navbar navbar-dark bg-dark rounded border-bottom shadow-sm p-3 mb-5 rounded text-white">
                <ul className='nav page-tabs'>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/')} to="/"
                              onClick={event => this.onTabClick(event, '/')}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/about')} to="/about"
                              onClick={event => this.onTabClick(event, '/about')}>
                            About
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/projects')} to="/projects"
                              onClick={event => this.onTabClick(event, '/projects')}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/resume')} to="/resume"
                              onClick={event => this.onTabClick(event, '/resume')}>
                            Resume
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={this.isActiveTab('/contact')} to="/contact"
                              onClick={event => this.onTabClick(event, '/contact')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

        )
    }

};

export default Navbar;