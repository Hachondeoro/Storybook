import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        {/* <NavbarBrand className='mr-auto' href='/'>
                            <img src={require('./assets/images/logo.png')} width='100' alt="Frank's website"></img>
                        </NavbarBrand> */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home fa-lg'></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/editable'>
                                        <span className='fa fa-info fa-lg'></span> Editable
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/example'>
                                        <span className='fa fa-info fa-lg'></span> Example
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <h1>Storybook</h1>
            </React.Fragment>
        )
    }
}


export default Header;