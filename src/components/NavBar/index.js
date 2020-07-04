import React from 'react';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
// import NavBarLogo from "../../images/NavBarLogo.png";

const NavBar = () => {
    const history = useHistory();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar color="primary" style={{ display: "flex", justifyContent: "left" }}>
                    {/* <img
                        src={NavBarLogo}
                        style={{ width: "128px", maxWidth: "100%", paddingRight: "2em" }}
                        alt="GDDev"
                    /> */}
                    <Button
                        to={`/`}
                        color="inherit"
                        component={Link}
                        variant={history.location.pathname === "/" && "outlined"}
                        style={{ marginRight: 20 }}
                    >
                        Início
                </Button>
                    <Button
                        to={`/quem-sou-eu`}
                        color="inherit"
                        component={Link}
                        variant={history.location.pathname === "/quem-sou-eu" && "outlined"}
                        style={{ marginRight: 20 }}
                    >
                        Quem Sou Eu
                </Button>
                </Toolbar>
            </AppBar>
            <div style={{ margin: "106px 20px 60px 20px" }} />
        </>
    )
}

export default NavBar;