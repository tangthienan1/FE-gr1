import React from 'react';
import {
    Card,
    CardBody, 
    CardImg,
    CardText,
    CardTitle, 
    Col, 
    Row
} from 'reactstrap';
import './contents.css'

const Contents = ({ contents, loading }) => {
    if (loading) {
        return <h2>Loading .... </h2>
    }
    
    return (
        <Row>
            {contents.map(content => (                
                <Col sm="4" key={content.id}>
                    <div className="padding">
                    
                    <Card className="card-body">
                        <CardImg top width="100%" src={content.url} className=""/>
                        <CardBody>
                            <CardTitle tag="h5" className="title">{content.title}</CardTitle>
                            <CardText className="description">{content.title}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                </Col>
                
            ))}
        </Row>
    );
}
export default Contents;