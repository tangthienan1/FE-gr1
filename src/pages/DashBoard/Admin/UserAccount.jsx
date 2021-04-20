import React from 'react'
import SearchBar from '../../../components/Base/include/Searchbar'
import './admin.css'
import Datatable from './datatable'
import Openmodal from './Modal/openmodal'

function UserAccount() {
    return (
        <div>
            <div className="form-cb">
            <SearchBar />
            <Openmodal/>  
            </div>
            <div className="table">
                <Datatable/>
            </div>
        </div>
        
    )
}

export default UserAccount;
