import React, { useState, Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Banner from '../Banner/Banner';
import Media from 'react-media'
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
import {
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header-padding">
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

            <Media query='(min-width: 547px)'>
                {matches => {
                    return matches ?
                        <>
                            <div className=".d-sm-none .d-md-block">
                                <Banner />
                                <div className="searchbar-style">
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                        <Button type="submit">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </>
                        : null
                }}
            </Media>
        </div >

    );
}

export default Header;