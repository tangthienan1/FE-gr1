import React from 'react'
import SearchBar from '../../../components/Base/include/Searchbar'
import './admin.css'
import Openmodal from './Modal/openmodal'

function UserAccount() {
    return (
        <div className="form-cb">
            <SearchBar />
            <Openmodal/>  
        </div>
    )
}

export default UserAccount;
