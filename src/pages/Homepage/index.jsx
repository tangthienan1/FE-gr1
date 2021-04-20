﻿import React, { useEffect, useState } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import ApprovedAPI from '../../api/ApprovedAPI';
import Base from '../../components/Base';
import Gallery from '../../components/Base/include/Gallery';
import Contents from '../../components/Base/include/Pagination/Contents';
import Pagination from '../../components/Base/include/Pagination/Pagination';

const Homepage = () => {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentsPerPage, setContentsPerPage] = useState(9);

    useEffect(() => {
        const fetchContents = async () => {
            setLoading(true);
            const response = await ApprovedAPI.getApproved();
            setContents(response.data);
            setLoading(false);
        }
        fetchContents();
    }, []);

    const indexOfLastContent = currentPage * contentsPerPage;
    const indexOfFirstContent = indexOfLastContent - contentsPerPage;
    const currentContent = contents.slice(indexOfFirstContent, indexOfLastContent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
        <Base>
            <div className="padding-b">
            </div>
            <Container>
                <h1 className="text-primary mb-3">Contents</h1>
                <Row>
                    <Contents contents={currentContent} loading={loading} key={contents.id} />
                    <div className="padding-a">
                        <Pagination contentsPerPage={contentsPerPage} totalContent={contents.length} paginate={paginate} />
                    </div>
                </Row>
            </Container>
            <div className="padding-a">
                <Gallery />
            </div>
        </Base>
        </>
    )
}

export default Homepage;