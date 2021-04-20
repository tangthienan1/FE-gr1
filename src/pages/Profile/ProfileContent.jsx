import React from 'react';
import {
    Card,
    CardText
} from 'reactstrap';

const ProfileContent = ({ profiles, loading }) => {
    if (loading) {
        return <h2>Loading .... </h2>
    }

    return (
        <div>
            {profiles.map(profile => (
                
                    <Card className='card'>
                        <div className='card-text-top'>
                            <CardText className='card-title'>This is title</CardText>
                            <CardText className='card-status'>Date approved</CardText>
                        </div>
                        <CardText className='card-des'>{profile.title}</CardText>
                    </Card>

            ))}
       </div>
    );
}

export default ProfileContent
