import { useState } from 'react';
import './managerTabview.css';
import Statistic from './Statistic'

function ManagerTabview() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container">

            <div className="bloc-tabs">
                <button className={toggleState === 1 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>Overview</button>
                <button className={toggleState === 2 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>Statistic</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ?
                    "content active-content" : "content"}>
                    <h3>hy</h3>

                </div>
                <div className={toggleState === 2 ?
                    "content active-content" : "content"}>
                <Statistic />
                </div>
            </div>
        </div>
    )
}
export default ManagerTabview;