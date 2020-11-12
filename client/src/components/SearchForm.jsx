 import React from 'react';
 import Form from 'react-bootstrap/Form';

 const SearchForm = (handleSubmitProp) => {
    return (
        <Form onChange={handleSubmitProp}>
            <Form.Row>
                <Form.Control
                    id='searchbar'
                    size='lg'
                    type='text'
                    placeholder='NAME A SONG'
                ></Form.Control>
            </Form.Row>
        </Form>
    );
 };

 export default SearchForm;