import { BrowserRouter, Route } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Container from 'react-bootstrap/Container';
import MainPage from './components/MainPage';
import AboutChris from './components/AboutChris';
import AboutSoundGarden from './components/AboutSoundGarden';
import AboutAudioSlave from './components/AboutAudioSlave';

import './SoundAudio.css';

function SoundAudio() {
    return (
        <BrowserRouter>
            <NavMenu />
            <Container>
                <Route path="/" exact component={MainPage} />
                <Route path="/aboutChris" component={AboutChris} />
                <Route path="/aboutSoundGarden" component={AboutSoundGarden} />
                <Route path="/aboutAudioSlave" component={AboutAudioSlave} />
            </Container>
        </BrowserRouter>
    );
}

export default SoundAudio;
