import React, { useEffect, useState } from 'react'
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import Pagination from '../../../../components/Base/include/Pagination/Pagination';
import SearchBar from '../../../../components/Base/include/Searchbar';
import ManagerContent from './ManagerContent'
import ManagerAPI from '../../../../api/commentAPI'

function Manager() {
    const [overview, setOverview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentsPerPage, setContentsPerPage] = useState(4);

    useEffect(() => {
        const fetchOverview = async () => {
            setLoading(true);
            const response = await ManagerAPI.getManager();
            setOverview(response.data);
            setLoading(false);
            console.log(response);
            console.log(response.data);
        }
        fetchOverview();
    }, []);

    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const currentOverview = overview.slice(indexOfFirstContent, indexOfLastContent);

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
                    <ManagerContent overview={currentOverview} loading={loading} key={overview.id} />
                    <div className="padding-top">
                        <Pagination contentsPerPage={contentsPerPage} totalContent={overview.length} paginate={paginate} />
                    </div>
                
            </Card>
        </div>
        <div className='space-bot'></div>
        </>
    )
}

export default Manager;