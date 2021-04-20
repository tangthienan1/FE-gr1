import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import {
    Collapse,
    DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
    NavbarBrand, NavbarToggler,
    UncontrolledDropdown
} from 'reactstrap';

const NavBars = (props) => {
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
                            <UncontrolledDropdown nav inNavbar>
                            <div className='nav-all'>
                                <Avatar src='./pngkey.com-avatar-png-1149847.png' />
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
                                </div>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBars;