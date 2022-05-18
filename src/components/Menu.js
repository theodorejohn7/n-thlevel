import React, { useState } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";

 
 import { Link } from "react-router-dom";

 

export default function Menu({ items }) {
   

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const ListItemBody = ({ config }) => {
    console.log("config", config);
    return (
      <>
        <ListItemIcon>{config.icon}</ListItemIcon>
        <ListItemText primary={config.title} />
      </>
    );
  };

  const MenuItem = ({ config }) => {
    const [open, setOpen] = useState(false);
    console.log("menu Item", config);
    const handleClick = (event, index) => {
      console.log("Menu item Expandable Menu", config.id);
      console.log("Menu item  index", index);
      if(index !== 0)
{      setSelectedIndex(index);}
      setOpen(!open);
      console.log("selected index", selectedIndex);
    };
    return (
      <ListItem
        button
        selected={selectedIndex === config.id}
        onClick={(event) => handleClick(event, config.id)}
        // selected={open ? "true" : "false"}
        sx={{ color: selectedIndex === config.id ? "red" : "black" }}
      >
        <ListItemBody config={config} />
      </ListItem>
    );
  };

  const ExpandableMenuItem = ({ config }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event, index) => {
      console.log("Expandable Menu", config.id);
      console.log("index", index);
      if(index !== 0)
{      setSelectedIndex(index);}
      setOpen(!open);
      console.log("selected index", selectedIndex);
    };

    return (
      <div component="nav">
        <ListItem
          button
          selected={selectedIndex === config.id}
        sx={{ color: selectedIndex === config.id ? "red" : "black" }}

          onClick={(event) => handleClick(event, config.id)}
        >
          <ListItemBody config={config} > <Link to="/delete"></Link></ListItemBody>
          {open ? <ExpandLess /> : <ExpandMore />}
          
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Menu items={config.items}  id={config.id} />
        </Collapse>
      </div>
    );
  };

  const createList = (items) => {
    let menu = [];
    items.map((menuItem) => {
      if (Array.isArray(menuItem.items) && menuItem.items.length > 0) {
        menu.push(
          <ExpandableMenuItem
            config={menuItem}
            id={menuItem.id}
            key={menuItem.title}
          />
        );
      } else {
        menu.push(
          <MenuItem config={menuItem} id={menuItem.id} key={menuItem.title} />
        );
      }
    });
    return menu.concat();
  };
 
  return <List>{createList(items)}</List>;
}
