import React, { useState } from 'react';
import Media from 'react-media';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Col,
} from 'reactstrap';
import Banner from '../Banner/Banner';

import './Header.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header-padding">
            <div className="fixed-top">
                <Navbar light expand="md">
                    <NavbarBrand href="/" >Greenwich University Magazine System</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Col xs="auto">
                                <NavItem>
                                    <NavLink href="/">Guest</NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="auto">
                                <NavItem>
                                    <NavLink href="/dashboard">Dashboard</NavLink>
                                </NavItem>
                            </Col>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

            <Media query='(min-width: 547px)'>
                {matches => {
                    return matches ?
                        <>
                            <div className=".d-sm-none .d-md-block">
                                <Banner />
                                
                            </div>
                        </>
                        : null
                }}
            </Media>
            
        </div >

    );
}

export default Header;