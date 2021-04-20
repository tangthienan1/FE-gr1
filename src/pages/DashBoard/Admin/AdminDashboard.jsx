import React from 'react'
import Tabview from './tabview'
import '../../index.css'
import NavBars from '../Navbar';


function AdminDashboard() {
    return (
        <div>
            <NavBars/>
            <Tabview/>
        </div>
    )
}

export default AdminDashboard;
