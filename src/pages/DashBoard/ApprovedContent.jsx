import React from 'react';
import {
    Card,
    CardText
} from 'reactstrap';

function ApprovedContent({ approved, loading }) {
    if (loading) {
        return <h2>Loading .... </h2>
    }

    return (
        <div>
            {approved.map(approved => (
                
                    <Card className='card'>
                        <div className='card-text-top'>
                            <CardText className='card-title'>This is title</CardText>
                            <CardText className='card-status'>Date approved</CardText>
                        </div>
                        <CardText className='card-des'>{approved.title}</CardText>
                    </Card>

            ))}
       </div>
    )
}

export default ApprovedContent
