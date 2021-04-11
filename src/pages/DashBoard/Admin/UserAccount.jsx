import React from 'react'
import Pagination from '../../../components/Base/include/Pagination/Pagination'
import SearchBar from '../../../components/Base/include/Searchbar'
import './admin.css'
import Openmodal from './openmodal'

function UserAccount() {
    return (
        <div className="form-cb">
            <SearchBar />
            <Openmodal/>   
            <Pagination/>
        </div>
    )
}

export default UserAccount
