import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import { colors } from "@material-ui/core";
import SideDrawer from "../SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
  };
  toggleDrawer = (value) => {
    //console.log(value);
    this.setState({ drawerOpen: value });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "black",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <ToolBar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
