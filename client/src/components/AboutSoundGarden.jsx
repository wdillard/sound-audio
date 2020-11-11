import React from 'react';
import '../SAApp.css';

const AboutSoundGardenPage = () => {

    return (
        <>
        {/*This is the About SoundGarden Page */}
        <h1 className="aboutSoundGarden"> SoundGarden</h1>
        <p>
            <img
            style={{
                width: 300,
                float: 'left',
                margin: '1rem  1rem 1rem 0'
            }}
            src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.udiscovermusic.com%2Fartist%2Fsoundgarden%2F&psig=AOvVaw3a5wh75s8fVHYdAwJN3N3g&ust=1605200749483000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDGqIb9-uwCFQAAAAAdAAAAABAO'}
            alt={'SoundGarden'}
            />
        </p>
        <div>
            <p>
                This is about SoundGarden
            </p>
        </div>
        <div>
            <p>
                This is more about SoundGarden
            </p>
        </div>
        <div className="footerLinksAudioSlave">
            <a href={'https://www.soundgardenworld.com/'}>
                SoundGarden Page
            </a>
            <a href={'https://www.google.com/search?sxsrf=ALeKk02dxhRpOV9BG7gjs_trlDvv2d-_kg%3A1605114036890&ei=tBisX9_2NcnUsAXhrK2YAw&q=SoundGarden&oq=SoundGarden&gs_lcp=CgZwc3ktYWIQAzIHCC4QJxCTAjIKCAAQsQMQFBCHAjICCAAyBwgAEBQQhwIyAggAMgIILjICCC4yBAguEEMyAggAMgIILjoECAAQRzoKCC4QsQIQJxCTAjoHCAAQsQMQCjoECAAQCjoECC4QCjoGCAAQBxAeUNkWWMsxYJM8aABwAngAgAHJAYgBhASSAQU0LjAuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwjfoPjf-_rsAhVJKqwKHWFWCzMQ4dUDCA0&uact=5'}>
                SoundGarden Search
            </a>
            <a href={'https://www.youtube.com/results?search_query=SoundGarden'}>
                SoundGarden YouTube
            </a>
            <a href={'https://en.wikipedia.org/wiki/Soundgarden'}>
                SoundGarden Wikipedia
            </a>
        </div>
        </>
    );
};

export default AboutSoundGardenPage;