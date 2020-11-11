import React from 'react';
import '../App.css';

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
                src={'#'}
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