import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import './tabview.css'

function Submit() {
    return (
        <>
        <Form>
            <Row form>
                <Col md={7}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Title" />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup>
                        <Label for="type">Contribution Type</Label>
                        <Input type="select" name="type" id="type">
                            <option>Articles</option>
                            <option>Photographs</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Brief Description</Label>
                        <Input type="textarea" style={{ height: '150px' }} name="description" id="description" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form >
                <Col md={12} >
                    <FormGroup >
                        <Input type="file" name="upload" id="upload" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={12} className="text-center">
                    <FormGroup check >
                        <Label check>
                            <Input type="checkbox" />{' '}
                        I have read and agree to the <a href="https://google.com.vn/"> Terms and Conditions </a>
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            &nbsp;
            <Row form>
                <Col md={12} className="text-center">
                    <Button color="primary">Submit</Button>
                </Col>
            </Row>
        </Form>
        <div className='space-bot'></div>
        </>
    )
}

export default Submit
