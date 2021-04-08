import React, { useEffect, useState } from 'react'
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input, FormText, Col, Row, Container } from 'reactstrap';
import { PENDING_API } from '../../../../api/APIurl';
import pendingAPI from '../../../../api/pendingAPI';
import SearchBar from '../../../../components/Base/include/Searchbar';
import Pagination from '../../../../components/Base/include/Pagination/Pagination';
import PendingContents from './PendingContents'

const Pending = () => {
    const [pendings, setPendings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentsPerPage, setContentsPerPage] = useState(9);

    useEffect(() => {
        const fetchPending = async () => {
            setLoading(true);
            const response = await pendingAPI.getPending();
            setPendings(response.data);
            setLoading(false);
            console.log(response);
            console.log(response.data);
        }
        fetchPending();
    }, []);

    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const currentPending = pendings.slice(indexOfFirstContent, indexOfLastContent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
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
                <h1 className="text-primary mb-3">Contents</h1>
                <Row>
                    <PendingContents pendings={currentPending} loading={loading} key={pendings.id} />
                    <div className="padding-top">
                        <Pagination contentsPerPage={contentsPerPage} totalContent={pendings.length} paginate={paginate} />
                    </div>
                </Row>
            </Card>
        </div>
    )
}

export default Pending
