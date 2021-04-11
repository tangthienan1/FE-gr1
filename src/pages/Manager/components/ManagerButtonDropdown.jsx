import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ManagerButtonDropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Academic year
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Choose year</DropdownItem>
        <DropdownItem>2019</DropdownItem>
        <DropdownItem>2020</DropdownItem>
        <DropdownItem>2021</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default ManagerButtonDropdown;