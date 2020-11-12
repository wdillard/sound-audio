 import React from 'react';
 import Form from 'react-bootstrap/Form';
 import '../SoundAudio.css';

 const SearchForm = (search, onChange) => {
    return (
        <Form onChange={onChange}>
            <Form.Row>
                <Form.Control
                    id='searchbar'
                    size='lg'
                    type='text'
                    value={search}
                    placeholder='NAME A SONG'
                ></Form.Control>
            </Form.Row>
        </Form>
    );
 };

 export default SearchForm;