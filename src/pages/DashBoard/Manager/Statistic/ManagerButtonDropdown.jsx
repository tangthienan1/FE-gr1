import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ManagerButtonDropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const [lastClicked, setLastClicked] = useState(null);

  return (
    <div className='dropdown-button' style={{ width: 300, height: 100, border: '1px solid #000', padding: '8px', overflow: 'hidden', float: 'right'}}><br />
    Year: {lastClicked || 'null'}
    <div/>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Academic year
      </DropdownToggle>
      <DropdownMenu container="body">
          <DropdownItem onClick={() => setLastClicked(2019)}>2019</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2020)}>2020</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2021)}>2021</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
    </div>
  );
}

export default ManagerButtonDropdown;