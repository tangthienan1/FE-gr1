import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './dropdown'


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };
    return (
        <div>
            <nav className="navbar">
                <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <Link
                    to ='/Account'
                    className='nav-links'
                    onClick={closeMobileMenu}>
                        Account <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>

            </nav>
        </div>
    )
}
