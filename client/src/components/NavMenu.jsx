import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
    <Nav className='nav' activeKey="/" style={{ backgroundOpacity: 0 }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          MainPage
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutChris">
          Chris Cornell
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutSoundGarden">
          SoundGarden
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutAudioSlave">
          AudioSlave
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;