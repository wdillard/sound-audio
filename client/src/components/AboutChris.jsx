import React from 'react';
import '../SAApp.css';

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
                src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iheart.com%2Fartist%2Fchris-cornell-35394%2F&psig=AOvVaw34Q9DJzRme38CriE5BhdvE&ust=1605215961657000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjj5tu1--wCFQAAAAAdAAAAABAD'}
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