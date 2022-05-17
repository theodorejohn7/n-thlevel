import React from 'react';
import { makeStyles } from '@mui/material';
import { createStyles } from '@mui/material';
import { List } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
import { People } from '@mui/icons-material';
import { BarChart } from '@mui/icons-material';
import { LibraryBooks } from '@mui/icons-material';


 
import AppMenuItem from './AppMenuItem';
const appMenuItems = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: Dashboard,
    },
    {
        name: 'Orders',
        link: '/orders',
        Icon: ShoppingCart,
    },
    {
        name: 'Customers',
        link: '/customers',
        Icon: People,
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: BarChart,
    },
    {
        name: 'Nested Pages',
        Icon: LibraryBooks,
        items: [
            {
                name: 'Level 2',
            },
            {
                name: 'Level 2',
                items: [
                    {
                        name: 'Level 3',
                    },
                    {
                        name: 'Level 3',
                    },
                ],
            },
        ],
    },
];
const AppMenu = () => {
    const classes = useStyles();
    return (React.createElement(List, { component: "nav", className: classes.appMenu, disablePadding: true }, appMenuItems.map((item, index) => (React.createElement(AppMenuItem, Object.assign({}, item, { key: index }))))));
};
const drawerWidth = 240;
const useStyles = makeStyles(theme => createStyles({
    appMenu: {
        width: '100%',
    },
    navList: {
        width: drawerWidth,
    },
    menuItem: {
        width: drawerWidth,
    },
    menuItemIcon: {
        color: '#97c05c',
    },
}));
export default AppMenu;
