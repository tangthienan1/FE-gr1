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

function ManagerContent({ overview, loading }) {
    if (loading) {
        return <h2>Loading .... </h2>
    }

    return (
        <div>
            {overview.map(overview => (
                
                    <Card className='card-all'>
                        <div className='card-text-top'>
                            <CardText className='card-title'>Article/PhotoTitle</CardText>
                            <CardText className='card-status'>Date approved</CardText>
                        </div>
                        <CardText className='card-des'>{overview.title}</CardText>
                    </Card>
            ))}
       </div>
    )
}

export default ManagerContent;