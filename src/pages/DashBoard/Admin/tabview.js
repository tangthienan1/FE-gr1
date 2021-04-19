import { useState } from 'react';
import './admin.css';
import Session from './Session';
import UserAccount from './UserAccount';

function Tabview() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
        <div className="container">

            <div className="bloc-tabs">
                <button className={toggleState === 1 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>Account</button>
                <button className={toggleState === 2 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>Accademic Year</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ?
                    "content active-content" : "content"}>
                        <UserAccount/>
                        
                </div>
                <div className={toggleState === 2 ?
                    "content active-content" : "content"}>
                        <Session/>
                </div>
            </div>
        </div>  
        <div className="space">

        </div>
    </>
    )
    
}
export default Tabview;