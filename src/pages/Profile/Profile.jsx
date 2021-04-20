import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ProfileAPI from '../../api/profileAPI';
import img from '../DashBoard/Student/components/img.jpg';

function Profile() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const response = await ProfileAPI.getUserINFO();
            setProfile(response.data);
            setLoading(false);
            console.log(response.data);
        }
        fetchUser();
    }, []);

    return (
        <div className="container">
            <Form key={profile.id}>
                <Image src={img} style={{ width: 400, height: 400 }} />
                <FormGroup>
                    <Label key={profile.name} for="name">Full Name</Label>
                    <Input key={profile.name} type="text" name="name" id="name" placeholder="FullName" />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="text" name="address" id="address" placeholder="1234 Main St" />
                </FormGroup>
                <FormGroup>
                    <Label for="dob">Date of Birth</Label>
                    <Input
                        type="date"
                        name="dob"
                        id="dob"
                        placeholder="mm/dd/yyyy"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Number</Label>
                    <Input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <Button color="primary" size="lg" active>Edit</Button>{' '}
            </Form>
        </div>
    )
}

export default Profile
