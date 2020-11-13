import React from 'react';
import '../SoundAudio.css';

const AboutChris = () => {
    return (
        <>
            {/*This is the About Chris Cornell Page */}
            <h1 className="aboutChris"> Chris Cornell</h1>
            <p>
            <img
                style={{
                width: 300,
                float: 'left',
                margin: '1rem  1rem 1rem 0'
                }}
                src={'https://i.iheart.com/v3/catalog/artist/35394?ops=fit(480%2C480)%2Crun(%22circle%22)'}
                alt={'Chris Cornell'}
            />
            </p>
            <div>
                <p>
                    This is about Chris Cornell
                </p>
            </div>
        </>
    );
};
  
export default AboutChris;