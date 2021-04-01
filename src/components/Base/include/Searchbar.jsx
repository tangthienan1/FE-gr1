import React from 'react'
import {
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

function SearchBar() {
    return (
        <div>
            <Form inline className="p-4">
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Go</Button>
            </Form>
        </div>
    )
}

export default SearchBar
