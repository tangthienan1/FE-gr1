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

const PendingContents = ({ pendings, loading }) => {
    if (loading) {
        return <h2>Loading .... </h2>
    }

    return (
        // <>
        // <Card>
        //     {pendings.map(pending => (

        //         <Card className='card' key={pending.id}>
        //             <div className='card-text-top'>
        //                 <CardText className='card-title'>{pending.title}</CardText>
        //                 <CardText className='card-status'>{pending.id}</CardText>
        //             </div>
        //             <CardText className='text-center'>With supporting text below as a natural lead-in to additional content.</CardText>
        //         </Card>
        // </Row>
        // </>

        <Row>
            {pendings.map(pending => (
                <Col sm="4" key={pending.id}>
                    <div className="padding">
                    <Card className="card">
                        <CardBody>
                            <CardTitle tag="h5" className="title">{pending.title}</CardTitle>
                            <CardText className="description">{pending.title}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                </Col>

            ))}
        </Row>
    );
}

export default PendingContents
