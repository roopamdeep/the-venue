import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/core/Menu";
import { colors } from "@material-ui/core";

class Header extends Component {
  state = {};
  render() {
    return (
      <p>
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
          </ToolBar>
        </AppBar>
      </p>
    );
  }
}

export default Header;
