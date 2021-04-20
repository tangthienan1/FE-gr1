import React from 'react';
import {
    Card,
    CardText
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

        <div>
            {pendings.map(pending => (
                
                    <Card className='card'>
                        <div className='card-text-top'>
                            <CardText className='card-title'>This is title</CardText>
                            <CardText className='card-status'>Date approved</CardText>
                        </div>
                        <CardText className='card-des'>{pending.title}</CardText>
                    </Card>

            ))}
       </div>
    );
}

export default PendingContents
