import React, { useState } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Collapse } from "@mui/material";
 
import { ExpandLess } from "@mui/icons-material";

import { ExpandMore } from "@mui/icons-material";
 
const ListItemBody = ({config}) => {
  return (<>
      <ListItemIcon>{config.icon}</ListItemIcon>
      <ListItemText primary={config.title} />
  </>);
}

const MenuItem = ({ config }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      
      setOpen(!open);
    };
    return (

    <ListItem button sx={{color: open?"red":"black"}}  onClick={handleClick} >
      <ListItemBody   config={config}/>
    </ListItem>
  );
};

const ExpandableMenuItem = ({ config }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    
    setOpen(!open);
  };

  return (
    <div component="nav">
      <ListItem button sx={{color: open?"red":"black"}}  onClick={handleClick}>
        <ListItemBody   config={config}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}  timeout="auto" unmountOnExit>
        <Menu items={config.items}/>
      </Collapse>
    </div>
  );
};

export default function Menu({ items }) {
  const createList = (items) => {
    let menu = [];
    items.map((menuItem) => {
      if (Array.isArray(menuItem.items) && menuItem.items.length > 0) {
        menu.push(<ExpandableMenuItem  
          config={menuItem}
          key={menuItem.title}
        />);
      } else {
        menu.push(<MenuItem 
          config={menuItem}
          key={menuItem.title}
        />);
      }
    });
    return menu.concat();
  };

  return <List>{createList(items)}</List>;
}