import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
// import NavBarLogo from "../../images/NavBarLogo.png";

const NavBar = () => {
  const history = useHistory();
  const [selectedLink, setSelectedLink] = useState(history.location.pathname);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar color="primary" style={{ display: 'flex', justifyContent: 'left' }}>
          {/* <img
                        src={NavBarLogo}
                        style={{ width: "128px", maxWidth: "100%", paddingRight: "2em" }}
                        alt="GDDev"
                    /> */}
          <Button
            to="/"
            onClick={() => setSelectedLink('/')}
            color="inherit"
            component={Link}
            variant={selectedLink === '/' ? 'outlined' : 'text'}
            style={{ marginRight: 20 }}
          >
            Início
          </Button>
          <Button
            to="/quem-sou-eu"
            onClick={() => setSelectedLink('/quem-sou-eu')}
            color="inherit"
            component={Link}
            variant={selectedLink === '/quem-sou-eu' ? 'outlined' : 'text'}
            style={{ marginRight: 20 }}
          >
            Quem Sou Eu
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ margin: '106px 20px 60px 20px' }} />
    </>
  );
};

export default NavBar;
