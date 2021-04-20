import React from 'react'
import SearchBar from '../../../components/Base/include/Searchbar'
import Datatable from './datatable'
import Openmodal from './Modal/openmodal'

function UserAccount() {
    return (
        <div>
            <div className="form_cb">
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
