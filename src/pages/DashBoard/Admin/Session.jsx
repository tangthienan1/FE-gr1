import React from 'react'
import Pagination from '../../../components/Base/include/Pagination/Pagination'
import SearchBar from '../../../components/Base/include/Searchbar'
import Openmodal from './Modal/openmodal'

function Session() {
    return (
        <div className="form-cb">
            <SearchBar />
            <Openmodal/>
            <Pagination/>
            
        </div>
    )
}

export default Session
