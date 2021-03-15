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

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [{
                "id": 1,
                "name": "Nasua narica",
                "description": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
                "imgUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": 2,
                "name": "unavailable",
                "description": "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
                "imgUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": 3,
                "name": "Alouatta seniculus",
                "description": "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                "imgUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": 4,
                "name": "Acridotheres tristis",
                "description": "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin",
                "imgUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": 5,
                "name": "Neotis denhami",
                "description": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
                "imgUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": 6,
                "name": "Ammospermophilus nelsoni",
                "description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu",
                "imgUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": 7,
                "name": "Amazona sp.",
                "description": "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate",
                "imgUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": 8,
                "name": "Anathana ellioti",
                "description": "ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
                "imgUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": 9,
                "name": "Felis concolor",
                "description": "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
                "imgUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": 10,
                "name": "Laniarius ferrugineus",
                "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
                "imgUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": 11,
                "name": "Hippotragus niger",
                "description": "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
                "imgUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": 12,
                "name": "Nannopterum harrisi",
                "description": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
                "imgUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }]
        }
    }
    
    render() {
        const { contents } = this.state;
        return (
            <>
                <div>
                    <Header />
                </div>
                <div>
                    <Container>
                        <h2>Content</h2>
                        <Row>
                            {contents.map(content => (
                                <Col sm="4" >
                                    <Card>
                                        <CardImg top width="100%" src={content.imgUrl} />
                                        <CardBody>
                                            <CardTitle tag="h5">{content.name}</CardTitle>
                                            <CardText>{content.description}</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
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