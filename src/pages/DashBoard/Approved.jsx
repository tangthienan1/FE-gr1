import React, { useEffect, useState } from 'react';
import { Card, FormGroup, Input } from 'reactstrap';
import ApprovedAPI from '../../api/ApprovedAPI';
import Pagination from '../../components/Base/include/Pagination/Pagination';
import SearchBar from '../../components/Base/include/Searchbar';
import ApprovedContent from './ApprovedContent';

function Approved() {
    const [approved, setApproved] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentsPerPage, setContentsPerPage] = useState(4);

    useEffect(() => {
        const fetchApproved = async () => {
            setLoading(true);
            const response = await ApprovedAPI.getApproved();
            setApproved(response.data);
            setLoading(false);
            console.log(response);
            console.log(response.data);
        }
        fetchApproved();
    }, []);

    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const currentApproved = approved.slice(indexOfFirstContent, indexOfLastContent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <div>
            <div className='form_cb'>
                <SearchBar />
                <FormGroup>
                    <Input className='form-input' type="select" name="select">
                        <option>Articles</option>
                        <option>Photogragh</option>
                    </Input>
                </FormGroup>
            </div>

            <Card>
                    <ApprovedContent approved={currentApproved} loading={loading} key={approved.id} />
                    <div className="padding-top">
                        <Pagination contentsPerPage={contentsPerPage} totalContent={approved.length} paginate={paginate} />
                    </div>
                
            </Card>
        </div>
        <div className='space-bottom'></div>
        </>
    )
}

export default Approved
