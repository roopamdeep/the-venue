import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
const SideDrawer = (props) => {
  // console.log(props);
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          Event Starts In
        </ListItem>
        <ListItem button onClick={() => console.log("  Venue INFO")}>
          Venue INFO
        </ListItem>
        <ListItem button onClick={() => console.log("  Highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("     Pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("   Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
