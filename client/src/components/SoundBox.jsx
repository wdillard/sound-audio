import React from 'react';
import Card from 'react-boostrap/Card';
import '../SAApp';

//Need to import the background covers

const SongBox = () => {
    return (
        <Card className='Box'>
            <Card.Img src='#' alt="cover" />
                <Card.ImgOverlay className='album'>
                    <Card.Title>Title</Card.Title>
                    <div>
                        <Card.Link className='Play' href={`http://www.songsterr.com/a/wa/song?id=id`}>Learn To Play!</Card.Link>
                    </div>
                </Card.ImgOverlay>
        </Card>
    );
};

export default SongBox;