﻿﻿import React, { useEffect, useState } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import Base from '../../components/Base';
import Gallery from '../../components/Base/include/Gallery';
import SearchBar from '../../components/Base/include/Searchbar';
import Contents from '../../components/Base/include/Pagination/Contents';
import Pagination from '../../components/Base/include/Pagination/Pagination';
import './index.css';
import contributionAPI from '../../api/contributionAPI';
import '../../App.css'

const Homepage = () => {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contentsPerPage, setContentsPerPage] = useState(9);

    useEffect(() => {
        const fetchContents = async () => {
            setLoading(true);
            const response = await contributionAPI.getContribution();
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
            <div className="padding-bottom">
            </div>
            <Container>
                <h1 className="text-primary mb-3">Contents</h1>
                <Row>
                    <Contents contents={currentContent} loading={loading} key={contents.id} />
                    <div className="padding-top">
                        <Pagination contentsPerPage={contentsPerPage} totalContent={contents.length} paginate={paginate} />
                    </div>
                </Row>
            </Container>
            <div className="padding-top">
                <Gallery />
            </div>
        </Base>
        </>
    )
}

export default Homepage;