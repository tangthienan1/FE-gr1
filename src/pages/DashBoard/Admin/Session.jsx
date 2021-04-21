import React from 'react'
import { Button } from 'reactstrap'
import Pagination from '../../../components/Base/include/Pagination/Pagination'
import SearchBar from '../../../components/Base/include/Searchbar'
import routeConfig from '../../../config/route'

function Session() {
    return (
        <>
        <div className="form_cb">
            <SearchBar />
        </div>
        <Pagination/>
        </>
    )
}

export default Session
