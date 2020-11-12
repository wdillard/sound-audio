import React from 'react';
import Card from 'react-bootstrap/Card';
import '../SoundAudio';

//Need to import the background covers

const SongBox = (props) => {
    return (
        <Card className='Box'>
            <Card.Img src='#' alt="cover" />
                <Card.ImgOverlay className='album'>
                    <Card.Title>{props.title}</Card.Title>
                    <div>
                        <Card.Link className='Play' href={`http://www.songsterr.com/a/wa/song?id=${props.id}`}>Learn To Play!</Card.Link>
                    </div>
                </Card.ImgOverlay>
        </Card>
    );
};

export default SongBox;