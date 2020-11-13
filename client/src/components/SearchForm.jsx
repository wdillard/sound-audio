 import React from 'react';
 import Form from 'react-bootstrap/Form';
 import '../SoundAudio.css';

 const SearchForm = ({search, onChange}) => {
    return (
        <Form>
            <Form.Control onChange={onChange}
            id='searchbar'
            size='lg'
            type='text'
            value={search}
            placeholder='NAME A SONG' />
        </Form>
    );
 };

 export default SearchForm;