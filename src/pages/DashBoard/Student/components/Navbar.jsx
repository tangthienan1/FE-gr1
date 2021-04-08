import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Col
} from 'reactstrap';
import './tabview.css';

const Example = (props) => {
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
                            <UncontrolledDropdown nav inNavbar>
                                {/* <Avatar src='./pngkey.com-avatar-png-1149847.png' /> */}
                                <DropdownToggle nav caret>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        Sign out
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Example;