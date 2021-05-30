import { makeStyles, List, ListItem, ListItemText, Drawer, ListItemIcon, IconButton, Divider, Toolbar, AppBar } from "@material-ui/core";
import { FunctionComponent } from "react";
import { NaviationPaths, NaviationTitles, NavigationItems, SIDE_DRAWER_WIDTH } from '../Constants/Constants';
import React from "react";
import { ChevronLeft, SearchOutlined, SubjectOutlined } from "@material-ui/icons";
import clsx from 'clsx';
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },  
    mainContent: {
        backgroundColor: '#ff0000'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -SIDE_DRAWER_WIDTH,
        background: theme.palette.background.default
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
}));

const Layout: FunctionComponent = ({ children }) => {
    const style = useStyle();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.root}>

            <TopBar isOpen={open} handleDrawerOpen={handleDrawerOpen}></TopBar>

            <SideBar isOpen={open} handleDrawerClose={handleDrawerClose}></SideBar>

            <div className={
                clsx(style.content, {
                    [style.contentShift]: open,
            })}>
                <div className={style.drawerHeader} />
                {children}
            </div>

        </div>
    )
}

export default Layout;