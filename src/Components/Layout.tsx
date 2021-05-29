import { makeStyles, Typography, List, ListItem, ListItemText, Drawer, ListItemIcon, IconButton, Divider, Toolbar, AppBar } from "@material-ui/core";
import { FunctionComponent } from "react";
import { APP_NAME, NaviationPaths, NaviationTitles, NavigationItems } from '../Constants/Constants';
import React from "react";
import { ChevronLeft, SearchOutlined, SubjectOutlined, Menu } from "@material-ui/icons";
import clsx from 'clsx';
import { useHistory } from "react-router";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },  
    mainContent: {
        backgroundColor: '#ff0000'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth
    },
    drawerBackground: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Layout: FunctionComponent = ({ children }) => {
    const style = useStyle();
    const history = useHistory();
    const [open, setOpen] = React.useState(true);

    const Navigation_Items: Array<NavigationItems> = [
        {
            text: NaviationTitles.DETAILS,
            path: NaviationPaths.DETAILS,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.NOW_PLAYING,
            path: NaviationPaths.NOW_PLAYING,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.POPULAR,
            path: NaviationPaths.POPULAR,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.TOP_RATED,
            path: NaviationPaths.TOP_RATED,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.SEARCH,
            path: NaviationPaths.SEARCH,
            icon: <SearchOutlined />
        },
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.root}>

            <AppBar
                position="fixed"
                className={clsx(style.appBar, {
                [style.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(style.menuButton, open && style.hide)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        { APP_NAME }
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                className={style.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{paper: style.drawerBackground}}
            >
                <div className={style.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {<ChevronLeft />}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    {Navigation_Items.map(navigationItem => (

                        <ListItem button key={navigationItem.path} onClick={() => history.push(navigationItem.path)} >
                            <ListItemIcon>
                                {navigationItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={navigationItem.text} />
                        </ListItem>

                    ))}
                </List>
            </Drawer>

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