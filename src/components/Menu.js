import React, { useState } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";

import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Menu({ items }) {
  const prevIndex = useContext(ThemeContext); 
 
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const ListItemBody = ({ config }) => {
    return (
      <>
        <ListItemIcon>{config.icon}</ListItemIcon>
        <ListItemText primary={config.title} />
      </>
    );
  };

  const MenuItem = ({ config }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event, index) => {
      
      prevIndex.changeIndex(index);
      // setChildIndex(prevIndex.childIndex);
      // setSelectedIndex(index);

      setOpen(!open);
       
    };
    return (
      <ListItem
        button
        selected={prevIndex.childIndex === config.id}
        onClick={(event) => handleClick(event, config.id)}
        // selected={open ? "true" : "false"}
        sx={{ color: prevIndex.childIndex === config.id ? "blue" : "black" }}
      >
        <ListItemBody config={config} />
      </ListItem>
    );
  };

  const ExpandableMenuItem = ({ config }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event, index) => {
      if (index !== 0) {
        setSelectedIndex(index);
      }
      setOpen(!open);
    };

    return (
      <div component="nav">
        <ListItem
          button
          selected={selectedIndex === config.id}
          sx={{ color: selectedIndex === config.id ? "red" : "black" }}
          onClick={(event) => handleClick(event, config.id)}
        >
          <ListItemBody config={config}>
            {" "}
            <Link to="/delete"></Link>
          </ListItemBody>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Menu items={config.items} id={config.id} />
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
