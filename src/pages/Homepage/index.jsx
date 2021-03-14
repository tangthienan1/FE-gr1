import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
import Footer from '../../components/Base/include/Footer/Footer';
import Gallery from '../../components/Base/include/Gallery';
import Header from '../../components/Base/include/Header/Header';
import SearchBar from '../../components/Base/include/Searchbar';
import './index.css';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const contents = res.data;
                this.setState({ contents });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { contents } = this.state;
        return (
            <>
                <div>
                    <Header />
                </div>
                <div className="padding-bottom">
                <SearchBar />
                </div>
                <Container>
                    <h2>Content</h2>
                    <Row>
                        {contents.map(content => (
                            <Col sm="4" >
                                <Card>
                                    <CardImg top width="100%" src={content.url} />
                                    <CardBody>
                                        <CardTitle tag="h5">{content.title}</CardTitle>
                                        <CardText>{content.title}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="padding-top">
                <Gallery />
                </div>
                <div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Home;