import React from 'react'
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import SearchBar from '../../../../components/Base/include/Searchbar';

function Approved() {
    return (
        <div>
            <div className='form_cb'>
                <SearchBar/>
                <FormGroup>
                    <Input className='form-input' type="select" name="select">
                        <option>Articles</option>
                        <option>Photogragh</option>
                    </Input>
                </FormGroup>
            </div>

            <div>
                <Card className='card'>
                    <div className='card-text-top'>
                        <CardText className='card-title'>This is title</CardText>
                        <CardText className='card-status'>Date approved</CardText>
                    </div>
                    <CardText className='text-center'>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>

                <Card className='card'>
                    <div className='card-text-top'>
                        <CardText className='card-title'>This is title</CardText>
                        <CardText className='card-status'>Date approved</CardText>
                    </div>
                    <CardText className='text-center'>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>

                <Card className='card'>
                    <div className='card-text-top'>
                        <CardText className='card-title'>This is title</CardText>
                        <CardText className='card-status'>Date approved</CardText>
                    </div>
                    <CardText className='text-center'>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
            </div>
        </div>
    )
}

export default Approved
