import React from 'react';
import '../SoundAudio.css';

const AboutAudioSlavePage = () => {

    return (
      <>
        {/*This is the About AudioSlave Page */}
        <h1 className="aboutAudioSlave"> AudioSlave</h1>
        <p>
            <img
                style={{
                width: 300,
                float: 'left',
                margin: '1rem  1rem 1rem 0'
            }}
            src={'https://cdn.ome.lt/2mmnbptf_iGfbWDP0AgawgPN1dQ=/fit-in/837x500/smart/uploads/conteudo/fotos/audioslave_WdM84c0.jpg'}
            alt={'Audio Slave'}
            />
        </p>
        <div>
            <p>
                This is about AudioSlave
            </p>
        </div>
        <div>
            <p>
                This is more about AudioSlave
            </p>
        </div>
        <div className="footerLinksAudioSlave">
            <a href={'https://www.google.com/search?sxsrf=ALeKk03AZjUKIkTVx7G-8S6UbawBHZZ6vA%3A1605113555049&ei=0xasX7TEAoWsswWSqYSQAQ&q=AudioSlave&oq=AudioSlave&gs_lcp=CgZwc3ktYWIQDDIHCC4QJxCTAjIECC4QJzIHCC4QFBCHAjIHCC4QFBCHAjIFCAAQsQMyAggAMgQILhBDMgIILjICCAAyAggAOgQIABBHOgoILhCxAhAnEJMCOgcIIxCxAhAnOgQILhAKOgcIABCxAxAKOgQIABAKUJ4eWMxoYNyMAWgCcAJ4AIAB2gGIAZgEkgEFNC4wLjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwj0-Zb6-frsAhUF1qwKHZIUARIQ4dUDCA0'}>
                AudioSlave Search
            </a>
            <a href={'https://www.youtube.com/results?search_query=AudioSlave'}>
                AudioSlave YouTube
            </a>
            <a href={'https://en.wikipedia.org/wiki/Audioslave'}>
                AudioSlave Wikipedia
            </a>
        </div>
      </>
    );
  };
  
  export default AboutAudioSlavePage;