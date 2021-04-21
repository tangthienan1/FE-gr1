import React from 'react'
import { Button } from 'reactstrap'
import SearchBar from '../../../components/Base/include/Searchbar'
import routeConfig from '../../../config/route'
import Datatable from './datatable'

function UserAccount() {
    return (
        <div>
            <div className="form_cb">
            <SearchBar />
            </div>
            <div className="table">
                <Datatable/>
            </div>
        </div>
    )
}

export default UserAccount;
