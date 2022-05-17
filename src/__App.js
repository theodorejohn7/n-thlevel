import React from 'react';
import clsx from 'clsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Drawer } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

import AppMenu from './AppMenu';
const PageDashboard = () => React.createElement(Typography, { variant: "h3", component: "h1" }, "Dashboard Page");
const PageOrders = () => React.createElement(Typography, { variant: "h3", component: "h1" }, "Orders Page");
const PageCustomers = () => React.createElement(Typography, { variant: "h3", component: "h1" }, "Customers Page");
const PageReports = () => React.createElement(Typography, { variant: "h3", component: "h1" }, "Reports Page");
const App = () => {
    const classes = useStyles();
    return (React.createElement(BrowserRouter, null,
        React.createElement("div", { className: clsx('App', classes.root) },
            React.createElement(CssBaseline, null),
            React.createElement(Drawer, { variant: "permanent", classes: {
                    paper: classes.drawerPaper,
                } },
                React.createElement(AppMenu, null)),
            React.createElement("main", { className: classes.content },
                React.createElement(Container, { maxWidth: "lg", className: classes.container },
                    React.createElement(Routes, null,
                        React.createElement(Route, { path: "/", exact: true, component: PageDashboard }),
                        React.createElement(Route, { path: "/orders", component: PageOrders }),
                        React.createElement(Route, { path: "/customers", component: PageCustomers }),
                        React.createElement(Route, { path: "/reports", component: PageReports })))))));
};
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#535454',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
export default App;