import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
    <Nav activeKey="/" style={{ backgroundColor: 'blue' }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          MainPage
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutChris">
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutSoundGarden">
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/aboutAudioSlave">
          About Us
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;