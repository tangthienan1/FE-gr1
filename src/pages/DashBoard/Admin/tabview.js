import { useState } from 'react';
import './admin.css';

function Tabs() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
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
                <input type="text" placeholder="Search"/>

                </div>
                <div className={toggleState === 2 ?
                    "content active-content" : "content"}>
          <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}
export default Tabs;